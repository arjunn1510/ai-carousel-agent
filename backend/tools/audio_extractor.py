import subprocess

def extract_audio(video_path: str, audio_path: str) -> str:

    command = [
        "ffmpeg",
        "-y",
        "-i",
        video_path,
        "-q:a",
        "0",
        "-map",
        "a",
        audio_path
    ]

    subprocess.run(command)

    return audio_path