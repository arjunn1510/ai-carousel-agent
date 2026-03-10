from faster_whisper import WhisperModel

# Force CPU mode
model = WhisperModel(
    "base",
    device="cpu",
    compute_type="int8"
)

def transcribe_audio(audio_path: str) -> str:

    segments, _ = model.transcribe(audio_path)

    transcript = ""

    for segment in segments:
        transcript += segment.text

    return transcript