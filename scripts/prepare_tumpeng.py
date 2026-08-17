from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "client" / "public" / "image"
source = root / "tumpeng-source.jpeg"
dest = root / "layanan-tumpeng-baru.webp"
with Image.open(source) as image:
    image = image.convert("RGB")
    image.save(dest, "WEBP", quality=78, method=6)
    print(f"saved {dest} {dest.stat().st_size} bytes {image.width}x{image.height}")
