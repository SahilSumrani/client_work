type BrandLogoProps = {
  variant?: "header" | "footer" | "drawer";
  priority?: boolean;
};

/**
 * Gold gear mark — transparent PNG with breathing room around teeth.
 * Sized to Hulax-like nav proportions on large and small screens.
 */
const VARIANTS = {
  header: {
    src: "/images/dyu-logo-mark.png?v=1",
    width: 342,
    height: 245,
    frameClassName: "h-[40px] w-[56px] sm:h-[44px] sm:w-[61px] md:h-[48px] md:w-[67px]",
    imageClassName: "h-full w-full object-contain object-center",
  },
  footer: {
    src: "/images/dyu-logo-mark.png?v=1",
    width: 342,
    height: 245,
    frameClassName: "h-[72px] w-[100px] sm:h-[88px] sm:w-[122px] lg:h-[104px] lg:w-[146px]",
    imageClassName: "h-full w-full object-contain object-center",
  },
  drawer: {
    src: "/images/dyu-logo-mark.png?v=1",
    width: 342,
    height: 245,
    frameClassName: "h-[48px] w-[68px]",
    imageClassName: "h-full w-full object-contain object-center",
  },
} as const;

export default function BrandLogo({ variant = "header", priority = false }: BrandLogoProps) {
  const config = VARIANTS[variant];

  return (
    <span
      className={`brand-logo inline-flex items-center justify-center leading-none shrink-0 p-0 ${config.frameClassName}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={config.src}
        alt="DYU Solar LLP"
        width={config.width}
        height={config.height}
        className={`${config.imageClassName} block origin-center`}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </span>
  );
}
