from PIL import Image, ImageDraw, ImageFont
import os
import textwrap

WIDTH = 1080
HEIGHT = 1080


def generate_slide_images(slides, job_dir):

    image_paths = []

    # Try loading Arial font, fallback to default if unavailable
    try:
        title_font = ImageFont.truetype("arial.ttf", 90)
        body_font = ImageFont.truetype("arial.ttf", 45)
    except:
        title_font = ImageFont.load_default()
        body_font = ImageFont.load_default()

    for i, slide in enumerate(slides, start=1):

        headline = slide["headline"]
        body = slide["body"]

        img = Image.new("RGB", (WIDTH, HEIGHT), "black")
        draw = ImageDraw.Draw(img)

        # Wrap text
        headline_wrapped = "\n".join(textwrap.wrap(headline, width=12))
        body_wrapped = "\n".join(textwrap.wrap(body, width=28))

        # Headline
        draw.multiline_text(
            (540, 350),
            headline_wrapped,
            fill="white",
            font=title_font,
            anchor="mm",
            align="center"
        )

        # Body
        draw.multiline_text(
            (540, 600),
            body_wrapped,
            fill="white",
            font=body_font,
            anchor="mm",
            align="center"
        )

        # Save inside job folder
        image_path = os.path.join(job_dir, f"slide_{i}.png")

        img.save(image_path)

        image_paths.append(image_path)

    return image_paths