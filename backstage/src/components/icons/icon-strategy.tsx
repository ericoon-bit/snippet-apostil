const IconStrategy = ({ color = '#9fa7b5', size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.6 13.41l.4 1.93h5l.28-1.35c.17-.66.54-1.25 1.05-1.7 1.03-1 1.67-2.4 1.67-3.95 0-3.04-2.46-5.5-5.5-5.5S3 5.3 3 8.34c0 1.76.83 3.33 2.12 4.34.24.18.41.44.48.73z"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
        transform="translate(3.25 3)"
      />
      <path
        d="M6.925 8.984l1.58 2.95 1.58-2.95"
        stroke={color}
        strokeWidth={1}
        strokeOpacity={1}
        strokeDasharray="0 0"
        transform="translate(3.25 3)"
      />
      <path
        d="M14.819 3.621v-1.23M2.181 3.621v-1.23"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
        transform="translate(3.25 3)"
      />
      <path
        fillRule="evenodd"
        transform="translate(3.25 3) translate(5.92 15.34)"
        opacity={1}
        d="M1.5 3h2.17a1.499 1.499 0 001.5-1.5V.1c0-.06-.04-.1-.1-.1H.1C.04 0 0 .04 0 .1v1.4A1.499 1.499 0 001.5 3z"
        fill={color}
      />
      <path
        d="M8.75-.462v1.24"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
        transform="translate(3.25 3)"
      />
    </svg>
  )
}

export default IconStrategy