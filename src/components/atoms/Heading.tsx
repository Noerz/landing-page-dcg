import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  color?: 'white' | 'dark' | 'blue';
}

export default function Heading({
  level = 1,
  children,
  className = '',
  color = 'dark',
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const colorStyles = {
    white: 'text-white',
    dark: 'text-gray-800',
    blue: 'text-blue-600',
  };

  const sizeStyles = {
    1: 'text-4xl md:text-5xl font-bold',
    2: 'text-3xl md:text-4xl font-bold',
    3: 'text-2xl md:text-3xl font-bold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-semibold',
    6: 'text-base md:text-lg font-semibold',
  };

  return React.createElement(
    Tag,
    { className: `${sizeStyles[level]} ${colorStyles[color]} ${className}` },
    children
  );
}
