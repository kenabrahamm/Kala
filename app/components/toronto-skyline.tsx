export function TorontoSkyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* CN Tower */}
      <path d="M400 0V100M390 30H410M385 15H415M380 80H420" stroke="currentColor" strokeWidth="2" />

      {/* Buildings */}
      <path d="M300 50V100" stroke="currentColor" strokeWidth="2" />
      <path d="M310 60V100" stroke="currentColor" strokeWidth="2" />
      <path d="M320 40V100" stroke="currentColor" strokeWidth="2" />
      <path d="M330 55V100" stroke="currentColor" strokeWidth="2" />
      <path d="M340 45V100" stroke="currentColor" strokeWidth="2" />
      <path d="M350 65V100" stroke="currentColor" strokeWidth="2" />
      <path d="M360 50V100" stroke="currentColor" strokeWidth="2" />
      <path d="M370 70V100" stroke="currentColor" strokeWidth="2" />
      <path d="M380 60V100" stroke="currentColor" strokeWidth="2" />

      <path d="M420 60V100" stroke="currentColor" strokeWidth="2" />
      <path d="M430 50V100" stroke="currentColor" strokeWidth="2" />
      <path d="M440 65V100" stroke="currentColor" strokeWidth="2" />
      <path d="M450 45V100" stroke="currentColor" strokeWidth="2" />
      <path d="M460 70V100" stroke="currentColor" strokeWidth="2" />
      <path d="M470 55V100" stroke="currentColor" strokeWidth="2" />
      <path d="M480 60V100" stroke="currentColor" strokeWidth="2" />
      <path d="M490 50V100" stroke="currentColor" strokeWidth="2" />
      <path d="M500 65V100" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
