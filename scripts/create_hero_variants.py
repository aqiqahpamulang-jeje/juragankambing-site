from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "client" / "public" / "image"
src = root / "juragankambing-hero.webp"
with Image.open(src) as image:
    image = image.convert("RGB")
    for width, quality in ((1600, 80), (960, 78)):
        height = round(image.height * width / image.width)
        output = image.resize((width, height), Image.Resampling.LANCZOS)
        dest = root / f"juragankambing-hero-{width}.webp"
        output.save(dest, "WEBP", quality=quality, method=6)
        print(f"{dest.name}: {width}x{height}, {dest.stat().st_size} bytes")
