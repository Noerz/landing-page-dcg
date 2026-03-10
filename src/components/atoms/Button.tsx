"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white';
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
    'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center';

  const variantStyles = {
    primary:
      'bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg',
    secondary:
      'bg-blue-600 text-white hover:bg-blue-700 border-2 border-white',
    outline:
      'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white',
    'outline-white':
      'bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
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
