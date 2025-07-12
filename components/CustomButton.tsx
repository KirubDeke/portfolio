import React, { ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, className = '', variant = 'solid', ...props }, ref) => {
    const baseClasses = `
      font-medium rounded-lg text-sm px-5 py-2.5 text-center
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-4
      ${className}
    `;

    const variantClasses = variant === 'solid' ? `
      text-white 
      bg-gradient-to-r from-red-400 via-red-500 to-red-600
      hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700
      focus:ring-red-300/70
      shadow-lg shadow-red-500/30
      dark:shadow-red-800/40
    ` : `
      text-red-600
      bg-transparent
      border border-red-500
      hover:bg-red-50
      focus:ring-red-200
      dark:text-red-400 dark:border-red-400
    `;

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;