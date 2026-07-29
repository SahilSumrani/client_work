type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "navy" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
  size?: "default" | "home" | "nav" | "thinner";
  onClick?: () => void;
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className={className}>
      <path
        d="M0 9H16M16 9L8 17M16 9L8 1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/**
 * Hulax primary-button: sliding fill + padding swap + arrow circle swap.
 * Mirrors .primary-button / .button-bg / .button-arrow-block from Hulax CSS.
 */
export default function PrimaryButton({
  href,
  children,
  variant = "gold",
  className = "",
  target,
  rel,
  size = "default",
  onClick,
}: Props) {
  const safeRel =
    rel ??
    (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      onClick={onClick}
      className={`hulax-btn hulax-btn--${variant} hulax-btn--${size} ${className}`.trim()}
    >
      <span className="hulax-btn__bg" aria-hidden />
      <span className="hulax-btn__arrow hulax-btn__arrow--left" aria-hidden>
        <ArrowIcon />
      </span>
      <span className="hulax-btn__label">{children}</span>
      <span className="hulax-btn__arrow hulax-btn__arrow--right" aria-hidden>
        <ArrowIcon />
      </span>
    </a>
  );
}
