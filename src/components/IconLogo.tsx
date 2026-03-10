export default function IconLogo({ className }: { className?: string }) {
  // SVG paths translated perfectly from the user's provided file
  return (
    <svg
      viewBox="0 0 512 512"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs id="defs1" />
      <g id="layer1">
        <path
          display="inline" fill="#1acff1" fillOpacity={1} stroke="none" strokeWidth={2.74581} strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity={1}
          d="M 131.75109,206.00838 259.60271,303.03559 128.07647,439.99807 377.9035,302.01243 253.93518,207.64501 378.48132,55.108871 Z"
          id="path24"
        />
        {/* We use currentColor for the formerly black paths so it inherits #dfe4eb (since dark backgrounds require light text) */}
        <path
          display="inline" fill="currentColor" fillOpacity={1} stroke="none" strokeWidth={2.74581} strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity={1}
          d="m 157.11273,172.67501 v 193.18777 l 41.016,-41.01597 v -192.9451 z"
          id="path25"
        />
        <path
          display="inline" fill="currentColor" fillOpacity={1} stroke="none" strokeWidth={2.74581} strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity={1}
          d="M 307.98635,172.67501 V 365.86278 L 349.00232,324.3614 V 132.38708 Z"
          id="path26"
        />
        <path
          display="inline" fill="currentColor" fillOpacity={1} stroke="none" strokeWidth={2.74581} strokeLinecap="butt" strokeLinejoin="miter" strokeOpacity={1}
          d="m 170.70382,228.73837 h 162.63643 v 40.77324 H 170.46113 Z"
          id="path27"
        />
      </g>
    </svg>
  );
}
