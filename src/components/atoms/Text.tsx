interface TextProps {
  children: React.ReactNode;
  className?: string;
  color?: 'dark' | 'light' | 'white' | 'blue' | 'gray';
  size?: 'sm' | 'base' | 'lg' | 'xl';
}

export default function Text({
  children,
  className = '',
  color = 'dark',
  size = 'base',
}: TextProps) {
  const colorStyles = {
    dark: 'text-gray-800',
    light: 'text-gray-600',
    white: 'text-white',
    blue: 'text-blue-600',
    gray: 'text-gray-500',
  };

  const sizeStyles = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <p className={`${colorStyles[color]} ${sizeStyles[size]} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
