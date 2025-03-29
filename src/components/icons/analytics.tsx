export const IconAnalytics = ({
  className,
}: {
  className?: string | undefined;
}) => {
  return (
    <svg
      width="124"
      height="124"
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <g filter="url(#filter0_d_138_8664)">
        <rect
          x="37"
          y="37.2695"
          width="50"
          height="50"
          fill="url(#pattern0_138_8664)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_138_8664"
          x="0.545334"
          y="0.814865"
          width="122.909"
          height="122.909"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="18.2273" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.34902 0 0 0 0 0.113725 0 0 0 0 0.866667 0 0 0 0.75 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_138_8664"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_138_8664"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0_138_8664"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_138_8664" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_138_8664"
          width="100"
          height="100"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
