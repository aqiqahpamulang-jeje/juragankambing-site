from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "client" / "public" / "image"
for src in sorted(root.glob("*.png")):
    if src.name == "logo-juragankambing.png":
        quality = 86
    else:
        quality = 82
    with Image.open(src) as image:
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA")
        dest = src.with_suffix(".webp")
        image.save(dest, "WEBP", quality=quality, method=6)
        print(f"{src.name} -> {dest.name}: {src.stat().st_size} -> {dest.stat().st_size} bytes")
