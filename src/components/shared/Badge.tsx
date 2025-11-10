// src/components/shared/Badge.tsx

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'active' | 'blocked' | 'warning' | 'success';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'active', 
  className = '' 
}: BadgeProps) {
  const variants = {
    active: 'bg-green-500/20 text-green-300',
    blocked: 'bg-red-500/20 text-red-300',
    warning: 'bg-yellow-500/20 text-yellow-300',
    success: 'bg-teal-500/20 text-teal-300',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

