# Ripple Background Effect Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an ambient, auto-pulsing ripple effect centered on the viewport background behind all page content.

**Architecture:** Pure CSS keyframe animation on 3 absolutely-centered `<div>` elements inside a `position: fixed` container. Colors driven by CSS variables (matching the existing `data-theme` dark mode pattern) defined in `globals.css`. No JS, no client component.

**Tech Stack:** Next.js (App Router), Tailwind CSS v4, CSS custom properties

## Global Constraints

- Dark mode uses `data-theme="dark"` on `:root` — NOT Tailwind's `.dark` class. Never use `dark:` Tailwind variants for theme-dependent colors; always use CSS variables.
- All CSS goes in `app/globals.css`.
- Component lives at `app/components/RippleBackground.tsx` (server component, no `"use client"`).

---

### Task 1: Add ripple CSS variables and keyframe to globals.css

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Produces: `--ripple-bg` CSS variable (consumed by Task 2 component), `ripple` keyframe, `.ripple-circle` class

- [ ] **Step 1: Add `--ripple-bg` to the light mode `:root` block**

Open `app/globals.css`. Inside the existing `:root { }` block (after the `--wave-stroke` line, around line 112), add:

```css
  /* Ripple background */
  --ripple-bg: #c5c5c521;
```

- [ ] **Step 2: Add `--ripple-bg` to the dark mode block**

Inside the existing `:root[data-theme="dark"] { }` block (after the `--wave-stroke` line, around line 237), add:

```css
  /* Ripple background */
  --ripple-bg: #4b267b21;
```

- [ ] **Step 3: Add the `@keyframes ripple` animation and `.ripple-circle` class**

After the closing `}` of the `@layer utilities` block (around line 272), add:

```css
@keyframes ripple {
  0%   { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
}

.ripple-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  border-radius: 9999px;
  background: var(--ripple-bg);
  animation: ripple 4s ease-out infinite;
}
```

- [ ] **Step 4: Verify CSS is valid**

Run the dev server and confirm no CSS parse errors in the terminal:

```bash
cd my-project && npm run dev
```

Expected: server starts, no `SyntaxError` or CSS parse warnings.

- [ ] **Step 5: Commit**

```bash
git add my-project/app/globals.css
git commit -m "feat: add ripple keyframe and CSS variable for background effect"
```

---

### Task 2: Create RippleBackground component and integrate into page

**Files:**
- Create: `app/components/RippleBackground.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `.ripple-circle` class and `--ripple-bg` variable from Task 1
- Produces: `<RippleBackground />` default export (server component, no props)

- [ ] **Step 1: Create `app/components/RippleBackground.tsx`**

```tsx
export default function RippleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <div className="ripple-circle" style={{ animationDelay: '0s' }} />
      <div className="ripple-circle" style={{ animationDelay: '1.3s' }} />
      <div className="ripple-circle" style={{ animationDelay: '2.6s' }} />
    </div>
  );
}
```

- [ ] **Step 2: Import and render in `app/page.tsx`**

Add the import at the top of `app/page.tsx`:

```tsx
import RippleBackground from "./components/RippleBackground";
```

Then add `<RippleBackground />` as the first child inside the outer `<div>`, before `<main>`:

```tsx
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--page-bg)' }}>
      <RippleBackground />
      <main className="relative top-0 h-full flex flex-1 w-full max-w-3xl flex-col items-center sm:items-start">
        {/* ... existing children ... */}
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Visual verification**

With the dev server running (`npm run dev`), open the browser at `http://localhost:3000`.

Expected:
- 3 concentric circles expand outward from viewport center, one after another (~1.3s apart)
- Circles fade to transparent before the next wave starts
- Circles appear behind all page content (navbar, hero, etc.)
- Toggle dark mode — circles change from light gray tint to purple tint

- [ ] **Step 4: Commit**

```bash
git add my-project/app/components/RippleBackground.tsx my-project/app/page.tsx
git commit -m "feat: add RippleBackground component to page layout"
```
