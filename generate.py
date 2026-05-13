import os
from PIL import Image  # pyright: ignore[reportMissingImports]
from tqdm import tqdm  # pyright: ignore[reportMissingModuleSource]

# --- CONFIGURATION ---
INPUT_DIR = "public/higher-hero"  # Your source PNGs
FRAMES_OUT = "public/lower-hero"  # Your optimized web frames

def run_pipeline():
    # Collect and sort PNGs
    files = sorted([f for f in os.listdir(INPUT_DIR) if f.lower().endswith('.png')])
    print(f"🚀 Processing {len(files)} frames for higher hero project...")

    for filename in tqdm(files):
        # 1. Load Original PNG
        path = os.path.join(INPUT_DIR, filename)
        img = Image.open(path).convert("RGB")
        
        # Define clean name (0001.webp)
        clean_name = os.path.splitext(filename)[0] + ".webp"

        # 2. STEP ONE: Convert to Optimized WebP Frame
        frame_path = os.path.join(FRAMES_OUT, clean_name)
        img.save(frame_path, "WEBP", quality=90, method=6) # method 6 = highest compression effort

       
 
    print(f"\n✅ SUCCESS!")
    print(f"📁 Optimized Visuals: {FRAMES_OUT}")

if __name__ == "__main__":
    run_pipeline()