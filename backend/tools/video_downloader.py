import yt_dlp


def download_video(url: str, output_path: str) -> str:

    ydl_opts = {
        "outtmpl": output_path,
        "format": "best"
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

    return output_path