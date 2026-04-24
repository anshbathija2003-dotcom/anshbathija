import sys
import subprocess

try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

reader = pypdf.PdfReader(r"C:\Users\Anshb\Downloads\Ansh Bathija Website\Assets\Resume.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

print("---RESUME TEXT START---")
print(text)
print("---RESUME TEXT END---")
