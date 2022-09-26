const SymbolEdit = ({ size = 24 }) => {
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
          <path id="a" d="M0 0H23.99896491765976V23.99896491765976H0z" />
          <path id="c" d="M0 0H14.134444519567676V12.54608937825949H0z" />
          <path
            id="e"
            d="M9.08 12.55c.62 0 1.12-.5 1.12-1.12V1.12C10.2.5 9.7 0 9.08 0H1.12C.5 0 0 .5 0 1.12v10.31c0 .62.5 1.12 1.12 1.12h7.96z"
          />
        </defs>
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <g mask="url(#b)">
          <g transform="translate(4.932 5.726)">
            <mask id="d" fill="#fff">
              <use xlinkHref="#c" />
            </mask>
            <g mask="url(#d)">
              <path
                fillRule="evenodd"
                transform="translate(.513)"
                opacity={1}
                d="M.86.02C.56 0 .14.32.03.74 0 .9-.01 1.05 0 1.21v8.53c-.01.15 0 .31.03.46.11.43.53.75 1.03.75h7.37c.13 0 .26 0 .39-.02.5-.09.87-.48.87-.96V1.21c.01-.16 0-.31-.03-.46C9.55.32 9.13 0 8.63 0H1.26C1.13-.01 1 0 .86.02z"
                fill="#1279ff"
              />
              <path
                fillRule="evenodd"
                transform="translate(2.144 2.27)"
                opacity={1}
                d="M.42.84h4.73c.11 0 .22-.04.3-.12.08-.08.12-.19.12-.3 0-.11-.04-.22-.12-.3a.423.423 0 00-.3-.12H.42C.31 0 .2.04.12.12.04.2 0 .31 0 .42c0 .11.04.22.12.3.08.08.19.12.3.12z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                transform="translate(2.144 5.175)"
                opacity={1}
                d="M.42.84h3.74c.11 0 .22-.04.3-.12.08-.08.12-.19.12-.3 0-.11-.04-.22-.12-.3a.423.423 0 00-.3-.12H.42C.31 0 .2.04.12.12.04.2 0 .31 0 .42c0 .11.04.22.12.3.08.08.19.12.3.12z"
                fill="#80aaff"
              />
              <path
                fillRule="evenodd"
                transform="translate(2.144 7.443)"
                opacity={1}
                d="M.42.84h3.74c.11 0 .22-.04.3-.12.08-.08.12-.19.12-.3 0-.11-.04-.22-.12-.3a.423.423 0 00-.3-.12H.42C.31 0 .2.04.12.12.04.2 0 .31 0 .42c0 .11.04.22.12.3.08.08.19.12.3.12z"
                fill="#80aaff"
              />
              <mask id="f" fill="#fff">
                <use xlinkHref="#e" />
              </mask>
              <g mask="url(#f)">
                <path
                  fillRule="evenodd"
                  opacity={1}
                  d="M5.66 1.91L3.95.2l-.2-.2-.2.2L.22 3.53l-.08.07v.11L.02 5.54 0 5.86l.32-.02 1.83-.12.11-.01.07-.07 3.33-3.33.2-.2-.2-.2z"
                  fill="#1279ff"
                  transform="translate(6.596 5.96)"
                />
                <path
                  d="M5.66 1.91L3.95.2l-.2-.2-.2.2L.22 3.53l-.08.07v.11L.02 5.54 0 5.86l.32-.02 1.83-.12.11-.01.07-.07 3.33-3.33.2-.2-.2-.2z"
                  stroke="#ecf3ff"
                  strokeWidth={0.601809996}
                  strokeOpacity={1}
                  strokeDasharray="0 0"
                  transform="translate(6.596 5.96)"
                />
              </g>
              <path
                fillRule="evenodd"
                transform="translate(6.895 4.281)"
                opacity={1}
                d="M.05 5.47L0 7.24l1.76-.05 5.32-5.31c.21-.22.21-.57 0-.79L6.15.16a.574.574 0 00-.79 0L.05 5.47z"
                fill="#80aaff"
              />
            </g>
          </g>
        </g>
      </svg>
    )
  }
  
  export default SymbolEdit
  