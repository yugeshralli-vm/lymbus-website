## Prime Design System – Hero Scroll Animation Notes

These notes are based on observing the hero section of [`primedesignsystem.com`](https://primedesignsystem.com/) and common patterns used for this kind of interaction. They are intended as implementation guidance, not an exact 1:1 code read.

---

### 1. High‑level behavior

- **Pinned hero feel:** As you start scrolling from the top, the hero headline and primary CTA stay in view for a while instead of immediately scrolling away, creating a “pinned” first impression.
- **Gradual reveal:** Sub‑content (supporting copy, subsequent sections) appears as you scroll, with smooth transitions in opacity/position rather than hard cuts.
- **Subtle parallax:** Visual elements (background shapes / cards) move at slightly different speeds relative to the text, giving depth without being distracting.

---

### 2. Likely layout structure

- **Root hero section**
  - A wrapper section sized taller than the viewport (e.g. `height: 200–300vh`) so there is scroll room while the hero content animates.
  - This wrapper establishes the scroll “track” for all hero animations.
- **Pinned inner container**
  - Inside, a container with `position: sticky; top: 0;` (or `top` offset to clear the navbar).
  - This container holds the main headline, sub‑headline, CTAs, and the primary visual.
  - Because the parent is tall and the inner container is sticky, the hero content appears to “stay fixed” while you scroll through the hero’s scroll range.
- **Sub‑sections under hero**
  - Below the pinned container, additional sections (e.g. “For Pros…”, “No‑fluff…”) are regular blocks that scroll normally, creating the transition from the hero to the rest of the page.

---

### 3. Scroll animation techniques

The specific JavaScript/CSS implementation is minified and not directly visible via markdown scraping, but the behavior is consistent with these patterns:

- **Sticky + transform combo**
  - Hero text block is sticky so it stays in place.
  - Decorative elements (background blobs, cards, etc.) inside the hero use `transform: translateY(...)` or `scale(...)` tied to scroll progress.
  - Animations are eased and clamped (e.g. map scroll progress 0–1 to limited ranges like 0–40px of translate or 0.95–1.0 scale).

- **Scroll progress mapping**
  - JavaScript reads `window.scrollY` (or an IntersectionObserver callback) and normalizes it into a 0–1 progress value over the hero’s height.
  - That progress is then used to:
    - Fade elements in/out (via `opacity`).
    - Slide elements up slightly (`translateY` from 20px → 0).
    - Potentially adjust blur/brightness of background elements for a “focus in” effect.
  - Updates are done inside a `requestAnimationFrame` loop or throttled scroll handler to keep animations smooth.

- **IntersectionObserver for trigger points**
  - IO is commonly used on this type of page to:
    - Add a `visible` class when the hero first enters the viewport.
    - Trigger one‑time animations (e.g. counters, subtle entrance transitions) without heavy scroll listeners.
  - Other sections (feature lists, testimonials, pricing) likely reuse this “add `visible` when intersecting” pattern.

---

### 4. Visual polish details

- **Soft parallax**
  - Background gradients or shapes move more slowly than the scroll, while foreground content moves at full speed (or vice versa).
  - Implemented via small `translateY` deltas on scroll, not via full parallax libraries.

- **Easing & snapping**
  - CSS transitions (`transition: transform 0.4s ease-out, opacity 0.4s ease-out;`) smooth the motion when classes toggle.
  - Over tiny scroll ranges, this can look like a continuous animation even if driven by class changes instead of continuous scroll position.

- **Performance considerations**
  - Animated properties are limited to `transform` and `opacity` to keep scrolling at 60fps.
  - Elements likely use `will-change: transform, opacity;` on heavier animations.

---

### 5. How to replicate a similar hero pattern

1. **Create a tall hero wrapper**
   - Give the hero section a height of `200vh–250vh`.
   - This is the scroll “budget” for your hero animation.

2. **Pin the hero content**
   - Wrap headline + CTAs + key visual in a container with:
     - `position: sticky;`
     - `top: <nav-height or small offset>;`
   - This makes the hero feel like it’s pinned while the user scrolls the first part of the page.

3. **Animate inner elements on scroll**
   - Option A (pure CSS + IO):
     - Use IntersectionObserver to toggle `is-active` / `is-past` classes at certain thresholds along the hero.
     - Attach CSS transitions on `transform` / `opacity` for those states.
   - Option B (scroll progress):
     - Listen to `scroll`, compute normalized progress over the hero, and inline‑style `transform`/`opacity` on key layers.

4. **Transition into next sections**
   - After the hero wrapper ends, regular sections continue below.
   - Because the hero height is finite, once you scroll past it, the sticky container scrolls away and the rest of the page behaves normally.

---

### 6. Key takeaways for our own implementation

- Use **one tall hero section** with a **sticky inner container** to get the pinned‑while‑scrolling effect without complex libraries.
- Drive subtle motion with **small transforms and opacity changes** rather than large movements.
- Use **IntersectionObserver** or a light scroll handler to toggle states, and let **CSS transitions** handle the animation.
- Keep the hero height reasonable so that once the hero animation is “done”, the user naturally transitions into the main content rather than over‑scrolling a blank area.

