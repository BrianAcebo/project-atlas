export const Logo = ({ className }: { className: string }) => {
  return (
    <svg
      aria-label="Project Atlas feather logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="500"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={className ?? ""}
    >
      <defs>
        <clipPath id="88cab3fa08">
          <path
            d="M 52.5 0 L 322.5 0 C 351.496094 0 375 23.503906 375 52.5 L 375 322.5 C 375 351.496094 351.496094 375 322.5 375 L 52.5 375 C 23.503906 375 0 351.496094 0 322.5 L 0 52.5 C 0 23.503906 23.503906 0 52.5 0 Z M 52.5 0 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="818d3da11e">
          <path
            d="M 72.898438 72.898438 L 302.398438 72.898438 L 302.398438 302.398438 L 72.898438 302.398438 Z M 72.898438 72.898438 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#88cab3fa08)">
        <rect
          x="-37.5"
          width="450"
          fill="#ffffff"
          y="-37.499999"
          height="449.999989"
          fillOpacity="1"
        />
      </g>
      <g clipPath="url(#818d3da11e)">
        <path
          fill="#0b0121"
          d="M 292.546875 72.898438 C 208.476562 72.898438 166.472656 118.6875 146.296875 140.699219 L 117.179688 170.078125 C 100.933594 186.300781 92 207.878906 92 230.84375 L 92 244.796875 L 111.359375 225.433594 C 112.621094 209.621094 119.339844 194.90625 130.644531 183.597656 L 160.378906 153.605469 C 177.910156 134.488281 213.554688 95.613281 282.753906 92.222656 C 280.636719 135.402344 264.714844 165.503906 248.394531 186.304688 L 216.148438 197.046875 L 239.238281 197.046875 C 232.605469 204.269531 226.332031 210.082031 221.386719 214.617188 L 212.023438 223.886719 L 177.949219 235.246094 L 200.554688 235.246094 L 191.414062 244.292969 C 178.789062 256.917969 162.007812 263.878906 144.148438 263.878906 L 124.621094 263.878906 L 213.347656 175.148438 L 199.84375 161.644531 L 72.898438 288.589844 L 86.402344 302.09375 L 105.523438 282.976562 L 144.148438 282.976562 C 167.109375 282.976562 188.691406 274.03125 204.957031 257.757812 L 234.277344 228.679688 C 256.289062 208.519531 302.09375 166.527344 302.09375 82.449219 L 302.09375 72.898438 Z M 292.546875 72.898438 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
