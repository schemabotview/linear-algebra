"""
Generate audio from a .tts file using ChatterboxTTS.

Usage:
    python generate_audio.py tts/01-intro-and-setup.tts
    python generate_audio.py tts/01-intro-and-setup.tts --force
"""

import argparse
import sys
import torch
import torchaudio as ta
from pathlib import Path

from chatterbox.tts import ChatterboxTTS


def main():
    parser = argparse.ArgumentParser(description="Generate audio from a .tts file")
    parser.add_argument("tts_file", type=Path, help="Path to the .tts file")
    parser.add_argument("--force", action="store_true", help="Regenerate even if .wav already exists")
    args = parser.parse_args()

    # ── Resolve paths ──────────────────────────────────────────────────────────
    repo_root = Path(__file__).parent.parent
    tts_file  = args.tts_file if args.tts_file.is_absolute() else repo_root / args.tts_file
    audio_dir = repo_root / "audio"
    audio_dir.mkdir(exist_ok=True)
    dest = audio_dir / (tts_file.stem + ".wav")

    if not tts_file.exists():
        print(f"Error: file not found: {tts_file}")
        sys.exit(1)

    if dest.exists() and not args.force:
        print(f"Already exists: {dest.name}  (use --force to regenerate)")
        sys.exit(0)

    # ── Device ─────────────────────────────────────────────────────────────────
    if torch.cuda.is_available():
        device = "cuda"
        print("Using CUDA (NVIDIA GPU)")
    elif torch.backends.mps.is_available():
        device = "mps"
        print("Using MPS (Apple Silicon)")
    else:
        device = "cpu"
        print("Using CPU (slower)")

    # ── Load model ─────────────────────────────────────────────────────────────
    print("Loading model...")
    model = ChatterboxTTS.from_pretrained(device=device)
    print("Model loaded\n")

    # ── Generate ───────────────────────────────────────────────────────────────
    import re

    MAX_CHUNK = 300

    def to_chunks(text):
        chunks = []
        for line in text.split("\n"):
            line = line.strip()
            if not line:
                continue
            if len(line) <= MAX_CHUNK:
                chunks.append(line)
            else:
                # split long lines on sentence boundaries
                sentences = re.split(r'(?<=[.!?])\s+', line)
                buf = ""
                for s in sentences:
                    if len(buf) + len(s) + 1 <= MAX_CHUNK:
                        buf = (buf + " " + s).strip() if buf else s
                    else:
                        if buf:
                            chunks.append(buf)
                        buf = s
                if buf:
                    chunks.append(buf)
        return chunks

    text    = tts_file.read_text(encoding="utf-8").strip()
    chunks  = to_chunks(text)
    silence = torch.zeros(1, int(model.sr * 0.3))  # 300 ms gap between chunks

    print(f"Generating: {tts_file.name} ({len(chunks)} chunks)")
    segments = []
    for i, chunk in enumerate(chunks):
        print(f"  chunk {i+1}/{len(chunks)}: {chunk[:60]}...")
        if device == "mps":
            torch.mps.empty_cache()  # prevent OOM on Apple Silicon
        try:
            wav = model.generate(chunk).cpu()
            segments.append(wav)
            segments.append(silence)
        except RuntimeError as e:
            print(f"  skipped: {e}")

    if not segments:
        print("Error: no audio generated")
        sys.exit(1)

    ta.save(str(dest), torch.cat(segments, dim=-1), model.sr)
    print(f"\nSaved: {dest}")


if __name__ == "__main__":
    main()
