const IconPanel = ({ color = "#9fa7b5", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4.21 16.79h15.58c.23 0 .44-.14.53-.35.44-1.06.68-2.22.68-3.44a9 9 0 10-17.32 3.44c.09.21.3.35.53.35z"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
      />
      <path
        fillRule="evenodd"
        transform="translate(9 13)"
        opacity={1}
        d="M3 0C1.34 0 0 1.34 0 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
        fill={color}
      />
      <path
        d="M12 11v4"
        stroke={color}
        strokeWidth={2}
        strokeOpacity={1}
        strokeDasharray="0 0"
      />
      <path
        d="M12 7v1M15.956 9.076l.71.71M7.87 9.076l-.56.71M7 14H6M18 14h-1"
        stroke={color}
        strokeWidth={1}
        strokeOpacity={1}
        strokeDasharray="0 0"
      />
    </svg>
  )
}

export default IconPanel