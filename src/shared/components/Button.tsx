import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  target,
  rel,
  type = "button",
  onClick,
  ariaLabel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 focus:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary",
    outline:
      "border-2 border-border text-foreground hover:bg-accent focus:ring-accent",
    ghost: "text-foreground hover:bg-accent/50 focus:ring-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
