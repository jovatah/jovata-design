export default function Logo() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Architectural J - more structured form */}

      {/* vertical stem */}
      <line
        x1="60"
        y1="15"
        x2="60"
        y2="65"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* base curve (controlled geometry) */}
      <path
        d="
          M60 65
          C60 82, 45 88, 35 78
        "
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}