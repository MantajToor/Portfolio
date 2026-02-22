import { cn } from "@/lib/utils";

interface PixelButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function PixelButton({
  children,
  href,
  variant = "primary",
  className,
}: PixelButtonProps) {
  const classes = cn(
    "pixel-btn",
    variant === "primary" ? "pixel-btn-primary" : "pixel-btn-secondary",
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

  return <button className={classes}>{children}</button>;
}

