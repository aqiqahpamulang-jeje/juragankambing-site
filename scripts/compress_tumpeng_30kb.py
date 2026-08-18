from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "client" / "public" / "image"
source = root / "tumpeng-source.jpeg"
dest = root / "layanan-tumpeng-30kb.webp"
with Image.open(source) as image:
    image = image.convert("RGB")
    target_ratio = 5 / 4
    current_ratio = image.width / image.height
    if current_ratio < target_ratio:
        crop_height = int(image.width / target_ratio)
        top = max(0, (image.height - crop_height) // 2)
        image = image.crop((0, top, image.width, top + crop_height))
    else:
        crop_width = int(image.height * target_ratio)
        left = max(0, (image.width - crop_width) // 2)
        image = image.crop((left, 0, left + crop_width, image.height))
    image = image.resize((512, 410), Image.Resampling.LANCZOS)
    image.save(dest, "WEBP", quality=60, method=6)
    print(f"saved {dest} {dest.stat().st_size} bytes {image.width}x{image.height}")
