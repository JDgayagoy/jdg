---
title: Ripple Background Effect
date: 2026-06-17
status: approved
---

## Overview

Ambient, auto-pulsing ripple effect centered on the viewport background, visible across the full page during scroll. Pure CSS — no JS, no client component.

## Component

**File:** `app/components/RippleBackground.tsx`

A server component that renders a fixed container with 3 ripple circles.

## Container

```
position: fixed
inset: 0
z-index: -1
pointer-events: none
overflow: hidden
```

Sits behind all page content. Stays in place during scroll.

## Circles

3 identical `<div>` elements, each:

- Positioned at viewport center: `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`
- Base size: `w-[200px] h-[200px]`
- Shape: `rounded-full`
- Color (light): `bg-[#c5c5c521]`
- Color (dark): `dark:bg-[#4b267b21]`
- Animation: `ripple` keyframe, `4s ease-out infinite`
- Staggered delays: `0s`, `1.3s`, `2.6s`

## Keyframe

```css
@keyframes ripple {
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
}
```

Defined in `app/globals.css`. Scale 4× means ~800px diameter at peak.

## Integration

Add `<RippleBackground />` inside the outer div in `app/page.tsx`, before `<main>`.

## Theme Support

Light/dark handled by Tailwind's `dark:` variant — no JS or CSS variable changes needed.
