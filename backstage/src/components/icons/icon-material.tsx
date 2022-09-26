const IconMaterial = ({ color = "#9fa7b5", size = 24 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M7.5 13H12v-3c0-1.06-.42-2.08-1.17-2.83A4.004 4.004 0 008 6H4.3c-.17 0-.3.13-.3.3v3.2c0 .93.37 1.82 1.03 2.47.65.66 1.54 1.03 2.47 1.03z"
                stroke={color}
                strokeWidth={2}
                strokeOpacity={1}
                strokeDasharray="0 0"
            />
            <path
                d="M11 8.5V12h5c1.06 0 2.08-.42 2.83-1.17S20 9.06 20 8V4.3c0-.17-.13-.3-.3-.3h-4.2c-1.19 0-2.34.47-3.18 1.32C11.47 6.16 11 7.31 11 8.5zM12 9.5v8"
                stroke={color}
                strokeWidth={2}
                strokeOpacity={1}
                strokeDasharray="0 0"
            />
            <path
                d="M12 13c-2.5-1-4-3.5-4-3.5M12 12c2-3 4-4 4-4"
                stroke={color}
                strokeWidth={1}
                strokeOpacity={1}
                strokeDasharray="0 0"
            />
            <path
                fillRule="evenodd"
                transform="translate(4.18 15)"
                opacity={1}
                d="M4.82 1C2.67 1 .84 2.36.13 4.26c-.03.09-.02.19.04.28.06.08.15.12.25.12H14.5c.08 0 .16-.03.21-.09.05-.06.08-.14.07-.21A4.994 4.994 0 009.82 0C8.54 0 7.36.48 6.48 1.28 5.96 1.1 5.4 1 4.82 1z"
                fill={color}
            />
        </svg>
    )
}

export default IconMaterial
