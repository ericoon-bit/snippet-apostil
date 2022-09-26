const IconData = ({ color = "#9fa7b5", size = 24 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <defs>
        <path id="a" d="M0 0H24V24H0z" />
      </defs>
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <g mask="url(#b)">
        <path
          fillRule="evenodd"
          transform="translate(4.84 13.68)"
          opacity={1}
          d="M0 6h4V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v5z"
          fill={ color }
        />
        <path
          fillRule="evenodd"
          transform="translate(9.84 11.68)"
          opacity={1}
          d="M0 8h4V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v7z"
          fill={ color }
        />
        <path
          fillRule="evenodd"
          transform="translate(14.84 9.68)"
          opacity={1}
          d="M0 10h4V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v9z"
          fill={ color }
        />
        <path
          d="M16.01 6.59c-2.75 2.29-6.96 3.57-10.5 4"
          stroke={ color }
          strokeWidth={2}
          strokeOpacity={1}
          strokeDasharray="0 0"
        />
        <path
          fillRule="evenodd"
          transform="rotate(49.65 6.723 19.824)"
          opacity={1}
          d="M.58 4.03h4.47c.11 0 .22-.06.27-.16.05-.1.04-.22-.02-.31L3.06.35a.309.309 0 00-.24-.13c-.1 0-.19.05-.25.13L.33 3.56c-.06.09-.07.21-.02.31s.16.16.27.16z"
          fill={ color }
        />
      </g>
    </svg>
  )
}

export default IconData
