import os
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEYS = [
    os.getenv("GOOGLE_API_KEY_1"),
    os.getenv("GOOGLE_API_KEY_2")
]