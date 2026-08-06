/**
 * Decorative geometry for navy hero sections. Pure SVG, no images:
 * a deep navy diagonal plane, gold tassel lines, and a faint dot grid.
 * Rendered absolutely behind hero content.
 */
export default function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* deep diagonal plane */}
      <svg className="absolute -right-40 -top-52 h-[190%] w-auto opacity-90" viewBox="0 0 600 900" fill="none">
        <path d="M290 0 L600 0 L600 900 L60 900 Z" fill="#162044" />
      </svg>
      {/* faint dot grid, top left. Hidden on mobile where it collides with text */}
      <svg className="absolute left-4 top-6 opacity-25 hidden sm:block" width="220" height="120" viewBox="0 0 220 120">
        <defs>
          <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#4D63A0" />
          </pattern>
        </defs>
        <rect width="220" height="120" fill="url(#dots)" />
      </svg>
    </div>
  )
}
