export default function LogoLight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 72" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="ClearFin">
      <path d="M30,14 A19,19 0 1,0 30,52" fill="none" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
      <line x1="38" y1="14" x2="45" y2="14" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
      <line x1="30" y1="33" x2="45" y2="33" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
      <line x1="38" y1="52" x2="45" y2="52" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round"/>
      <line x1="50" y1="14" x2="50" y2="52" stroke="#c4b5fd" strokeWidth="3" strokeLinecap="round"/>
      <text y="44" fontFamily="Arial,sans-serif" fontSize="24" letterSpacing="-0.5">
        <tspan x="62" fontWeight="300" fill="#7c3aed">Clear</tspan><tspan fontWeight="800" fill="#7c3aed">Fin</tspan>
      </text>
    </svg>
  );
}
