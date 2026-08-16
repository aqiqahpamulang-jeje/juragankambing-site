from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "client" / "public" / "image"
variants = {
    "menu-hangat.avif": [(800, 48), (1200, 52)],
    "proses-kandang.avif": [(768, 48), (1024, 52)],
    "logo-juragankambing.webp": [(256, 82)],
}
for filename, sizes in variants.items():
    source = root / filename
    with Image.open(source) as image:
        image = image.convert("RGB")
        for width, quality in sizes:
            height = round(image.height * width / image.width)
            output = image.resize((width, height), Image.Resampling.LANCZOS)
            extension = ".avif" if source.suffix.lower() == ".avif" else ".webp"
            dest = root / f"{source.stem}-{width}{extension}"
            output.save(dest, "AVIF" if source.suffix.lower() == ".avif" else "WEBP", quality=quality, method=6)
            print(f"{dest.name}: {width}x{height}, {dest.stat().st_size} bytes")
