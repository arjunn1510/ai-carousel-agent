from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

from services.pipeline_service import CarouselPipeline

os.makedirs("outputs", exist_ok=True)

app = FastAPI()

# Enable CORS (allows frontend to talk to backend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve output files (optional for debugging)
app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")

pipeline = CarouselPipeline()


# -----------------------------
# Request model
# -----------------------------
class VideoRequest(BaseModel):
    url: str


# -----------------------------
# Generate Carousel
# -----------------------------
@app.post("/generate-carousel")
def generate_post(data: VideoRequest):

    result = pipeline.run(data.url)

    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])

    return result


# -----------------------------
# Download TXT
# -----------------------------
@app.get("/download/txt/{job_id}")
def download_txt(job_id: str):

    file_path = f"outputs/{job_id}/carousel_slides.txt"

    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="TXT file not found")

    return FileResponse(
        path=file_path,
        media_type="application/octet-stream",
        filename="carousel_slides.txt"
    )


# -----------------------------
# Download ZIP
# -----------------------------
@app.get("/download/zip/{job_id}")
def download_zip(job_id: str):

    file_path = f"outputs/{job_id}/carousel_output.zip"

    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="ZIP file not found")

    return FileResponse(
        path=file_path,
        media_type="application/zip",
        filename="carousel_output.zip"
    )