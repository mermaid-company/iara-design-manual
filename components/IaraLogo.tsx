export function IaraLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* IARA Wordmark */}
      <text
        x="0"
        y="38"
        fill="currentColor"
        fontFamily="Funnel Display, sans-serif"
        fontSize="40"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        IARA
      </text>
    </svg>
  );
}

export function IaraIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="100"
        height="100"
        rx="20"
        fill="currentColor"
        className="text-iara-verde-base"
      />
      <path
        d="M51.3294 29H63.5474L27.2179 71.99H15L51.3294 29ZM55.443 65.3792L50.4202 71.8006L35.278 72L71.6075 29.0349L85 29.1944V71.99H73.9223L74.0304 65.4989L74.2172 56.4103L74.5858 40.7957L62.4563 56.4053L55.4479 65.3842L55.443 65.3792Z"
        fill="white"
      />
    </svg>
  );
}

export function IaraFullLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon */}
      <rect x="0" y="5" width="50" height="50" rx="10" fill="currentColor" />
      <path
        d="M25.66 19.5H31.77L13.61 40.99H7.5L25.66 19.5ZM27.72 37.69L25.21 40.9L17.64 41L35.8 19.52L42.5 19.6V40.99H36.96L37.02 37.75L37.11 33.21L37.29 25.4L31.23 33.2L27.72 37.69Z"
        fill="white"
        transform="translate(0, 5)"
      />
      {/* Text */}
      <text
        x="70"
        y="42"
        fill="currentColor"
        fontFamily="Funnel Display, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="0.05em"
      >
        IARA
      </text>
    </svg>
  );
}
