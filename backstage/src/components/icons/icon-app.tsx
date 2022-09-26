const IconApp = ({ color = '#9fa7b5', size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 11h4V8c0-2.21-1.79-4-4-4H4v4c0 1.66 1.34 3 3 3z"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
      />
      <path
        fillRule="evenodd"
        transform="translate(4 13)"
        opacity={1}
        d="M7 4V0H3C1.34 0 0 1.34 0 3v1c0 1.66 1.34 3 3 3h1c1.66 0 3-1.34 3-3z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        transform="translate(13 13)"
        opacity={1}
        d="M4 0H0v4c0 1.66 1.34 3 3 3h1c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3z"
        fill={color}
      />
      <path
        d="M13 8v3h4c1.66 0 3-1.34 3-3V4h-3c-2.21 0-4 1.79-4 4z"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
      />
    </svg>
  )
}

export default IconApp
