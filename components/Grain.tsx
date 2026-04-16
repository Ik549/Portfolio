export default function Grain() {
  // Inline SVG fractal-noise filter applied to a full-viewport rect.
  // Fixed + pointer-events:none via .grain class, sits above content at z-100.
  return (
    <svg className="grain" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <filter id="grain-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-noise)" />
    </svg>
  );
}
