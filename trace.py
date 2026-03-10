import cv2
import numpy as np

def extract_svg_paths(img_path, output_svg='out.svg'):
    img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
    
    if img is None:
        print(f"Failed to load {img_path}")
        return
        
    h, w = img.shape[:2]
    
    with open(output_svg, 'w') as f:
        f.write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}">\n')

        # Check if four channels
        if len(img.shape) == 3 and img.shape[2] == 4:
            alpha = img[:,:,3]
            b, g, r = img[:,:,0], img[:,:,1], img[:,:,2]
            
            # Mask for black
            # Black regions typically have very low RGB values
            dark_mask = (r < 50) & (g < 50) & (b < 50) & (alpha > 50)
            
            # Mask for cyan
            # Cyan regions have high B and G, low R
            cyan_mask = (r < 100) & (g > 150) & (b > 150) & (alpha > 50)
            
            dark_img = np.zeros_like(alpha)
            dark_img[dark_mask] = 255
            
            cyan_img = np.zeros_like(alpha)
            cyan_img[cyan_mask] = 255
            
        else:
            # Simple gray check if no alpha
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            _, thresh = cv2.threshold(gray, 128, 255, cv2.THRESH_BINARY_INV)
            dark_img = thresh
            cyan_img = np.zeros_like(gray)

        def write_paths(mask, color):
            contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_L1)
            for cnt in contours:
                epsilon = 0.005 * cv2.arcLength(cnt, True)
                approx = cv2.approxPolyDP(cnt, epsilon, True)
                if len(approx) > 2:
                    path = "M " + " L ".join([f"{pt[0][0]},{pt[0][1]}" for pt in approx]) + " Z"
                    f.write(f'  <path d="{path}" fill="{color}" />\n')

        write_paths(cyan_img, '#1ECAEA')
        write_paths(dark_img, 'currentColor')
        
        f.write('</svg>\n')

# Using exact paths
extract_svg_paths(r"C:\Users\xflor\.gemini\antigravity\brain\b084c1f5-49b8-4fc0-b324-a75c59b1b7a4\media__1773099451638.png", "icon.svg")
extract_svg_paths(r"C:\Users\xflor\.gemini\antigravity\brain\b084c1f5-49b8-4fc0-b324-a75c59b1b7a4\media__1773099451647.png", "hero.svg")
print("Done extracting SVGs")
