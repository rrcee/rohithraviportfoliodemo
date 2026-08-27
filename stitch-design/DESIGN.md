# Design System: Rohith Ravi Wedding Portfolio

## 1. Visual Theme & Atmosphere
A gallery-airy, editorial portfolio that feels like a high-end photography magazine. The aesthetic is stark, minimalist, and deeply intentional—letting the heavy, emotional imagery do the talking. The variance is high (asymmetric photo placements, broken grids) while the density is low (massive whitespace, focused singular elements). Motion is fluid and heavy, relying on organic spring physics rather than sharp linear easings.

## 2. Color Palette & Roles
- **Canvas Bone** (#FBFBFA) — Primary background surface. Warm, gallery wall white.
- **Charcoal Ink** (#111111) — Primary text, deep dark elements. (No pure black #000000).
- **Muted Archive** (#787774) — Secondary text, metadata, captions, small mono type.
- **Whisper Border** (#EAEAEA) — Structural lines, 1px dividers, delicate separations.
- **Frosted Inverse** (#111111 with opacity layers) — For scrolled navbars and glass UI elements that need to sit above imagery.

## 3. Typography Rules
- **Display/Headlines:** `Cormorant Garamond` (or similar high-contrast modern serif) — Massive scale (up to 8xl), tight tracking, heavy leading. Used for editorial impact and section breaks.
- **Body:** `SF Pro Display`, `Outfit`, or `Satoshi` — Clean, unopinionated sans-serif. Relaxed leading, maximum 65ch width.
- **Mono/Metadata:** `SF Mono` or `JetBrains Mono` — Used strictly for small UI metadata, dates, locations, and step numbers. Always uppercase, heavily tracked (`tracking-widest`), tiny size (`text-[10px]`).
- **Banned:** Generic system serifs like Times New Roman. No heavy gradient text. Inter is banned for premium/creative contexts.

## 4. Component Stylings
- **Buttons (Tactile Pills):** Fully rounded (`rounded-full`). No neon glows. Active states must physically depress (`translate-y-[4px]`) with a hard box-shadow that flattens out, mimicking a real mechanical keyboard switch.
- **Hero Title Block:** The primary headline should be wrapped in a frosted `LiquidGlass` container (`backdrop-blur-md`, low opacity inverse background, heavy drop shadow) that refracts any background imagery or video.
- **Images:** Must have a slight initial grayscale (`grayscale-[10%]` to `[30%]`) that blooms into full color on hover. Subtle `ring-1 ring-black/10` to anchor them to the canvas.
- **Cards/Containers:** Avoid standard cards. Use border-top lines and negative space to separate items (like the Packages section).

## 5. Layout Principles
- **Grid Architecture:** 12-column CSS grid. Favor asymmetric placements (e.g., Image taking up 5 columns, text taking up 7).
- **Spatial Separation:** Absolutely no overlapping text and images. Every element has its own breathing room.
- **Responsive:** Strict single-column collapse on mobile below 768px. No horizontal scroll. 
- **Hero:** Must be full viewport height (`min-h-[100dvh]`). Never center the hero text if it can be dynamically staggered or placed asymmetrically.

## 6. Motion & Interaction
- **Spring Physics:** All entrance animations and reveals must use spring physics (e.g., `stiffness: 100, damping: 20, mass: 1`). Absolutely no linear easings.
- **Staggered Orchestration:** List items and paragraph text must cascade in sequentially, not all at once.
- **Micro-interactions:** Interactive components (buttons, links) should have distinct, tactile active states.
- **Performance:** Animate exclusively via `transform` and `opacity`.

## 7. Anti-Patterns (Banned)
- No emojis anywhere.
- No pure black (`#000000`).
- No neon/outer glow shadows.
- No 3-column equal card layouts (the classic generic feature row).
- No overlapping absolute-positioned text on top of images (unless the text is inside a distinct frosted glass bounding box).
- No filler UI text ("Scroll to explore", bouncing arrows).
- No AI copywriting slop ("Elevate your special day", "Unleash memories", "Game changer"). Use active, concrete, human language.
