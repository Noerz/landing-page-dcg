import React from 'react';

interface IconProps {
  type: 'cctv' | 'network' | 'windows' | 'server' | 'devices' | 'support';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Icon({ type, size = 'md', className = '' }: IconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const iconClasses = `${sizeClasses[size]} ${className}`;

  const icons = {
    cctv: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <path
          d="M48 16H16C13.8 16 12 17.8 12 20V44C12 46.2 13.8 48 16 48H48C50.2 48 52 46.2 52 44V20C52 17.8 50.2 16 48 16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 32C36.4183 32 40 28.4183 40 24C40 19.5817 36.4183 16 32 16C27.5817 16 24 19.5817 24 24C24 28.4183 27.5817 32 32 32Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    network: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <rect x="8" y="16" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 48V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 48V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M48 48V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    windows: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <rect x="8" y="8" width="24" height="24" stroke="currentColor" strokeWidth="2" />
        <rect x="32" y="8" width="24" height="24" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="32" width="24" height="24" stroke="currentColor" strokeWidth="2" />
        <rect x="32" y="32" width="24" height="24" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    server: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <rect x="8" y="12" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="28" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="8" y="44" width="48" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
        <circle cx="16" cy="34" r="2" fill="currentColor" />
        <circle cx="16" cy="50" r="2" fill="currentColor" />
      </svg>
    ),
    devices: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <rect x="8" y="12" width="40" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M20 40H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 44H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    support: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
      >
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" />
        <path d="M24 32L28 36L40 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 16L48 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 48L16 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 48L48 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[type];
}
