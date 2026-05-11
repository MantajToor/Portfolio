import { cn } from "@/lib/utils";

interface PixelButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function PixelButton({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: PixelButtonProps) {
  const classes = cn(
    "pixel-btn",
    variant === "primary" ? "pixel-btn-primary" : "pixel-btn-secondary",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

