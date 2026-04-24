import shutil
import os

assets_dir = r"C:\Users\Anshb\Downloads\Ansh Bathija Website\Assets"
public_dir = r"C:\Users\Anshb\.gemini\antigravity\scratch\anshbathija\public"

images = ["Ansh Founder Photo Transparent.png", "Helmet Ref.png"]

for img in images:
    src = os.path.join(assets_dir, img)
    dest = os.path.join(public_dir, img)
    try:
        shutil.copy2(src, dest)
        print(f"Copied {img}")
    except Exception as e:
        print(f"Error copying {img}: {e}")
