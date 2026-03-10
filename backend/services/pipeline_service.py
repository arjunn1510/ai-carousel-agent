import os
import json
import traceback
import zipfile
import uuid
import shutil
import time

from tools.video_downloader import download_video
from tools.audio_extractor import extract_audio
from tools.transcription_tool import transcribe_audio

from backend.chains.insight_chain import insight_chain
from backend.chains.carousel_chain import carousel_chain
#from chains.caption_chain import caption_chain

from utils.image_generator import generate_slide_images


class CarouselPipeline:

    def __init__(self):
        self.output_dir = "outputs"
        os.makedirs(self.output_dir, exist_ok=True)

    # -----------------------------
    # Cleanup old job folders
    # -----------------------------
    def cleanup_old_jobs(self, max_age_hours=2):

        now = time.time()

        for folder in os.listdir(self.output_dir):

            folder_path = os.path.join(self.output_dir, folder)

            if not folder.startswith("job_"):
                continue

            if not os.path.isdir(folder_path):
                continue

            created_time = os.path.getctime(folder_path)

            age_hours = (now - created_time) / 3600

            if age_hours > max_age_hours:
                print(f"Deleting old job folder: {folder_path}")
                shutil.rmtree(folder_path)

    # -----------------------------
    # Main pipeline
    # -----------------------------
    def run(self, video_url: str):

        try:

            print("\n🚀 PIPELINE STARTED\n")

            # Clean old jobs
            self.cleanup_old_jobs()

            # Create unique job folder
            job_id = str(uuid.uuid4())[:8]
            job_dir = os.path.join(self.output_dir, f"job_{job_id}")
            os.makedirs(job_dir, exist_ok=True)

            print("Job folder created:", job_dir)

            # -----------------------------
            # File paths inside job folder
            # -----------------------------
            video_path = os.path.join(job_dir, "video.mp4")
            audio_path = os.path.join(job_dir, "audio.mp3")

            # 1️⃣ Download Video
            print("[1/6] Downloading video...")
            download_video(video_url, video_path)
            print("Video saved:", video_path)

            # 2️⃣ Extract Audio
            print("[2/6] Extracting audio...")
            extract_audio(video_path, audio_path)
            print("Audio saved:", audio_path)

            # 3️⃣ Transcribe Audio
            print("[3/6] Transcribing audio...")
            transcript = transcribe_audio(audio_path)
            print("Transcript length:", len(transcript))

            # 4️⃣ Generate Insights
            print("[4/6] Generating insights...")
            insights = insight_chain.invoke({
                "transcript": transcript
            }).content

            print("Insights generated")

            # -----------------------------
            # Save insights
            # -----------------------------
            insights_path = os.path.join(job_dir, "insights.txt")

            with open(insights_path, "w", encoding="utf-8") as f:
                f.write(insights)

            print("Insights saved:", insights_path)

            # 5️⃣ Generate Carousel JSON
            print("[5/6] Generating carousel slides...")

            carousel_json = carousel_chain.invoke({
                "insights": insights
            }).content

            carousel_data = json.loads(carousel_json)

            slides = carousel_data["slides"]

            print("Slides generated:", len(slides))

            # 6️⃣ Generate Caption
            #print("[6/7] Generating caption...")

            #caption = caption_chain.invoke({
            #    "carousel": slides
            #}).content

            #print("Caption generated")

            # 7️⃣ Generate Slide Images
            print("[6/6] Generating slide images...")

            image_paths = generate_slide_images(slides, job_dir)

            print("Images created:", image_paths)

            # -----------------------------
            # Save transcript
            # -----------------------------
            transcript_path = os.path.join(job_dir, "transcript.txt")

            with open(transcript_path, "w", encoding="utf-8") as f:
                f.write(transcript)

            print("Transcript saved")

            # -----------------------------
            # Create formatted TXT slides file
            # -----------------------------
            text_path = os.path.join(job_dir, "carousel_slides.txt")

            with open(text_path, "w", encoding="utf-8") as f:

                for i, slide in enumerate(slides, start=1):

                    f.write(f"Slide {i}\n")
                    f.write(f"Heading: {slide['headline']}\n")
                    f.write(f"Description: {slide['body']}\n\n")

            print("Slides text file created:", text_path)

            # -----------------------------
            # Create ZIP file
            # -----------------------------
            zip_path = os.path.join(job_dir, "carousel_output.zip")

            with zipfile.ZipFile(zip_path, "w") as zipf:

                for img in image_paths:
                    zipf.write(img, os.path.basename(img))

                zipf.write(transcript_path, "transcript.txt")
                zipf.write(insights_path, "insights.txt")

            print("ZIP file created:", zip_path)

            print("\n✅ PIPELINE COMPLETE\n")

            return {
                "job_id": f"job_{job_id}"
            }

        except Exception as e:

            print("\n❌ PIPELINE ERROR\n")
            print("Error:", e)

            traceback.print_exc()

            return {
                "error": str(e)
            }