function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Meteors({ number = 20, className = "" }) {
  const meteors = new Array(number).fill(null);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="absolute top-0 left-0 h-px w-px animate-meteor-effect bg-white"
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}
    </div>
  );
}

