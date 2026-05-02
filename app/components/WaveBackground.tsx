export default function WaveBackground() {
  const lines = Array.from({ length: 30 });

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 800 240"
    >
      <rect width="800" height="240" fill="#FCFCFC" />
      {lines.map((_, i) => {
        const y = (i / (lines.length - 1)) * 240;
        const amp = 5 + Math.sin(i * 1.3) * 0.2;
        const freq = 2.5 + i * 0.15;
        const offset = i * 17;

        const points = Array.from({ length: 161 }, (_, j) => {
          const x = (j / 160) * 800;
          const wobble =
            Math.sin((j / 160) * freq * Math.PI * 2 + offset) * amp +
            Math.sin((j / 160) * freq * 1.7 * Math.PI + offset * 0.6) * amp * 0.4 +
            Math.sin((j / 160) * 0.8 * Math.PI + i) * amp * 0.25;
          return `${x},${y + wobble}`;
        });

        return (
          <polyline
            key={i}
            points={points.join(" ")}
            fill="none"
            stroke="rgba(199,199,199,0.9)"
            strokeWidth="0.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      })}
    </svg>
  );
}