"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-medium rounded-lg transition-colors duration-200 inline-flex items-center justify-center whitespace-nowrap';

  const variantStyles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700',
    secondary:
      'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline:
      'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
