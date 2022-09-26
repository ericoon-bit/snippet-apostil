const SymbolMessage = ({ size = 24 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                fillRule="evenodd"
                transform="translate(4 4) translate(2.66 2)"
                opacity={1}
                d="M0 5.086c.06.02.12.045.18.074l5.14 2.48 5.14-2.48a1.7 1.7 0 01.21-.084V1.33C10.67.6 10.07 0 9.34 0H1.33C.6 0 0 .6 0 1.33v3.756z"
                fill="#1279ff"
            />
            <path
                d="M6 4.66h4M6 6.66h4"
                stroke="#fff"
                strokeWidth={0.6733333534002304}
                strokeOpacity={1}
                strokeDasharray="0 0"
                transform="translate(4 4)"
            />
            <path
                fillRule="evenodd"
                transform="translate(4 4) translate(1.33 7.81)"
                opacity={1}
                d="M12.16.08L7.02 2.56c-.23.1-.49.1-.71 0L1.17.08A.82.82 0 000 .82v5.22c0 .45.36.81.81.81h11.7c.45 0 .82-.36.82-.81V.82c0-.6-.63-1-1.17-.74z"
                fill="#80aaff"
            />
        </svg>
    )
}

export default SymbolMessage
