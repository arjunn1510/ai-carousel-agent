import re

def parse_slides(carousel_text: str):
    """
    Convert carousel script into list of slides
    """

    slides = []

    pattern = r"Slide\s*\d+[:\-]\s*(.*?)(?=Slide\s*\d+[:\-]|$)"

    matches = re.findall(pattern, carousel_text, re.DOTALL)

    for m in matches:
        slide = m.strip()
        slides.append(slide)

    return slides