"use client";

const shots = [
  { angle: 14, length: 44, color: "#5CFF8F" },
  { angle: 38, length: 64, color: "#E6B325" },
  { angle: 72, length: 50, color: "#5CFF8F" },
  { angle: 118, length: 74, color: "#FF3B3B" },
  { angle: 152, length: 58, color: "#E6B325" },
  { angle: 206, length: 66, color: "#5CFF8F" },
  { angle: 248, length: 48, color: "#FF3B3B" },
  { angle: 304, length: 76, color: "#E6B325" },
  { angle: 334, length: 54, color: "#5CFF8F" },
];

export function WagonWheel() {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-md border border-white/12 bg-[#07110e]">
      <div className="noise-overlay" />
      <svg viewBox="0 0 200 200" className="relative z-10 h-full w-full">
        <circle cx="100" cy="100" r="82" fill="#082016" stroke="rgba(255,255,255,.14)" strokeWidth="1" />
        <circle cx="100" cy="100" r="48" fill="none" stroke="rgba(92,255,143,.18)" strokeDasharray="4 6" />
        <ellipse cx="100" cy="100" rx="12" ry="30" fill="#b78c45" opacity=".9" />
        <path d="M100 70 L106 100 L100 130 L94 100 Z" fill="#d7b178" opacity=".9" />
        {shots.map((shot, index) => {
          const radians = (shot.angle * Math.PI) / 180;
          const x = 100 + Math.cos(radians) * shot.length;
          const y = 100 + Math.sin(radians) * shot.length;
          return (
            <g key={shot.angle}>
              <line
                x1="100"
                y1="100"
                x2={x}
                y2={y}
                stroke={shot.color}
                strokeWidth={index % 3 === 0 ? 3.4 : 2.2}
                strokeLinecap="round"
                opacity=".86"
              />
              <circle cx={x} cy={y} r="3.5" fill={shot.color} />
            </g>
          );
        })}
      </svg>
      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5CFF8F]">Wagon wheel</p>
        <p className="font-score text-3xl text-white">64% leg side</p>
      </div>
    </div>
  );
}
