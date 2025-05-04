import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  to?: string; 
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  size = "md",
}) => {
  // Base styles
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2";

  // Variant styles
  const variantClasses = {
    primary: "bg-green-500 text-white hover:bg-green-600 shadow-sm",
    secondary: "bg-green-100 text-green-800 hover:bg-green-200",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400",
  };

  // Size styles
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
  };

  // Disabled styles
  const disabledClasses = disabled ? "opacity-60 cursor-not-allowed" : "";

  // Final combined classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  // Shared click handler
  const handleClick = () => {
    if (onClick) onClick();
  };

  // External or internal links
  if (to) {
    return (
      <a href={to} className={buttonClasses} onClick={handleClick}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // Default button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
