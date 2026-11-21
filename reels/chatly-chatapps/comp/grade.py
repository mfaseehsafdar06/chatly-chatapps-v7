"""Soft warm grade after the HeyClicky reels (reference/ig/DfqdQY6xnVc, DfTNd0vgVYY): lifted blacks, creamy compressed highlights,
golden mids, cream whites, warm-brown shadows, golden-natural skin (hue ~55 deg, never green), gentle lens bloom, light vignette.
Worked in Lab so colour moves are tone-weighted: the cream/green-ish highlight shift only lives above skin brightness.
grade(bgr uint8) -> bgr uint8.  Measured: ref skin a+13.9 b+20.3 (ours a+13.7 b+11.9); ref mids b+14, highs b+9.5, shadows a+12 b+9."""
import numpy as np, cv2
Lx = np.arange(256, dtype=np.float32) / 255 * 100                      # Lab L in 0..100
def lcurve(L):
    y = 2.6 + L * (100 - 2.6) / 100                                        # lift blacks
    y = y - 2.0 * np.sin(np.pi * np.clip(y / 100, 0, 1))                   # mids a touch lower (softer, less glare)
    k = 72.0; y = np.where(y > k, k + (y - k) * .74, y)                    # creamy highlight compression
    return np.clip(y, 0, 100)
bell = lambda c, w: np.exp(-((Lx - c) / w) ** 2)
wS, wM, wH = bell(14, 16), bell(48, 18), np.clip((Lx - 62) / 18, 0, 1)
DA = 1.5 * wS + 1.2 * wM - 2.0 * wH                                       # a shift (+red / -green)
DB = 2.0 * wS + 9.5 * wM + 9.0 * wH                                       # b shift (+yellow)
SAT = 1.0 + .10 * wM                                                      # a little more colour in the mids only
L_LUT = (lcurve(Lx) * 255 / 100).astype(np.uint8)
H, W = 1080, 1920
yy, xx = np.mgrid[0:H, 0:W]; r = np.sqrt(((xx - W / 2) / (W * .62)) ** 2 + ((yy - H * .46) / (H * .72)) ** 2)
VIG = (1 - .12 * np.clip((r - .5) / .55, 0, 1) ** 1.8).astype(np.float32)[..., None]
def grade(img):
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
    Lc = lab[..., 0]; a = lab[..., 1].astype(np.float32) - 128; b = lab[..., 2].astype(np.float32) - 128
    sat = SAT[Lc]; a = a * sat + DA[Lc]; b = b * sat + DB[Lc]
    out = cv2.cvtColor(np.dstack([L_LUT[Lc], np.clip(a + 128, 0, 255).astype(np.uint8), np.clip(b + 128, 0, 255).astype(np.uint8)]), cv2.COLOR_LAB2BGR).astype(np.float32)
    hi = np.clip((out.max(2, keepdims=True) - 180) / 75, 0, 1) * out          # lens bloom from the highlights
    glow = cv2.GaussianBlur(hi, (0, 0), 22)
    out = 255 - (255 - out) * (1 - .10 * glow / 255)                          # screen-blend 10 %
    return np.clip(out * VIG, 0, 255).astype(np.uint8)
