const SymbolPut = ({ size = 24 }) => {
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
        <path id="a" d="M0 0H13.266186678539968V11.324681347288099H0z" />
      </defs>
      <g transform="translate(5.366 6.337)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <g mask="url(#b)" fillRule="evenodd">
          <path
            opacity={1}
            d="M2.205 9.59H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h9.31c.55 0 1 .45 1 1v.87H3.205c-.55 0-1 .45-1 1v6.72z"
            fill="#1279ff"
          />
          <path
            transform="translate(2.918 2.56)"
            opacity={1}
            d="M1 8.76h8.35c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v6.76c0 .55.45 1 1 1z"
            fill="#80aaff"
          />
          <path
            transform="translate(4.7 4.257)"
            opacity={1}
            d="M7.19.22a.256.256 0 00-.12-.18.258.258 0 00-.21-.03L5.39.35c-.05.01-.09.03-.13.07a.24.24 0 00-.07.12c-.02.05-.02.1-.01.15.01.04.04.09.07.12l.32.34-1.71 1.52-.88-.84a.318.318 0 00-.2-.08c-.08 0-.15.03-.2.09L.68 3.83a.566.566 0 00-.34.04.51.51 0 00-.26.22.563.563 0 00.67.82.6.6 0 00.27-.2.558.558 0 00.07-.5l1.7-1.78.88.82c.05.05.11.08.18.08.07 0 .14-.03.2-.07l1.91-1.71.37.38c.03.03.08.06.12.07.05.01.1.02.15 0 .05-.01.09-.03.13-.07.03-.03.06-.08.07-.13L7.19.35c.01-.04.01-.09 0-.13z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  )
}

export default SymbolPut