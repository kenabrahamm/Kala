export function RaccoonIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Face */}
      <circle cx="20" cy="20" r="15" fill="currentColor" />

      {/* Mask */}
      <path d="M12 15C12 15 14 19 20 19C26 19 28 15 28 15" stroke="white" strokeWidth="2" fill="white" />

      {/* Eyes */}
      <circle cx="15" cy="17" r="2" fill="black" />
      <circle cx="25" cy="17" r="2" fill="black" />

      {/* Ears */}
      <circle cx="10" cy="10" r="3" fill="currentColor" />
      <circle cx="30" cy="10" r="3" fill="currentColor" />

      {/* Nose */}
      <circle cx="20" cy="22" r="1.5" fill="black" />
    </svg>
  )
}
