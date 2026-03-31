export default function LogoDark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 72" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ClearFin">
      <path d="M30,14 A19,19 0 1,0 30,52" fill="none" stroke="#fdf4ff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="38" y1="14" x2="45" y2="14" stroke="#fdf4ff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="30" y1="33" x2="45" y2="33" stroke="#fdf4ff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="38" y1="52" x2="45" y2="52" stroke="#fdf4ff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="14" x2="50" y2="52" stroke="#9061f9" strokeWidth="3" strokeLinecap="round"/>
      <text y="44" fontFamily="Arial,sans-serif" fontSize="24" letterSpacing="-0.5">
        <tspan x="62" fontWeight="300" fill="#e9d5ff">Clear</tspan><tspan fontWeight="800" fill="#fdf4ff">Fin</tspan>
      </text>
      <line x1="62" y1="50" x2="240" y2="50" stroke="#4c1d95" strokeWidth="0.75"/>
      <text x="62" y="60" fontFamily="Arial,sans-serif" fontSize="7" fill="#9061f9" letterSpacing="2">GMBH · CLARITY IN CHANGE</text>
    </svg>
  );
}
