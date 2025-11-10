// src/components/shared/Card.tsx

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}

export function Card({ children, className = '', glass = false }: CardProps) {
  const glassStyles = glass 
    ? 'bg-white/5 backdrop-blur-xl border border-white/10' 
    : 'bg-white shadow-lg';
  
  return (
    <div className={`rounded-2xl p-6 ${glassStyles} ${className}`}>
      {children}
    </div>
  );
}

