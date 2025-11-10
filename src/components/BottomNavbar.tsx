// src/components/BottomNavbar.tsx

import React from 'react';
import { Home, Award, Activity, CheckCircle } from 'lucide-react';

interface BottomNavbarProps {
  activeTab: 'home' | 'logros' | 'actividad' | 'retos';
  onTabChange?: (tab: 'home' | 'logros' | 'actividad' | 'retos') => void;
}

function BottomNavbar({ activeTab, onTabChange }: BottomNavbarProps) {
  const navItems = [
    {
      id: 'home' as const,
      icon: Home,
      label: 'Home',
    },
    {
      id: 'logros' as const,
      icon: Award,
      label: 'Logros',
    },
    {
      id: 'actividad' as const,
      icon: Activity,
      label: 'Actividad Física',
    },
    {
      id: 'retos' as const,
      icon: CheckCircle,
      label: 'Retos Completos',
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-teal-100 to-teal-50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex justify-around items-center py-3 pb-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className="group relative flex flex-col items-center justify-center gap-1 min-w-0 flex-1 px-2 py-2 transition-all duration-200"
              aria-label={item.label}
            >
              {/* Fondo del tab activo - posicionado detrás del ícono */}
              {isActive && (
                <div className="absolute top-0 left-1/2 h-12 w-12 -translate-x-1/2 rounded-2xl bg-teal-500 transition-all duration-200"></div>
              )}
              
              <div className={`relative z-10 transition-all duration-200 ${
                isActive ? 'scale-110' : 'scale-100'
              }`}>
                <Icon
                  className={`w-6 h-6 transition-all duration-200 ${
                    isActive 
                      ? 'text-white fill-white' 
                      : 'text-white'
                  }`}
                />
              </div>
              <span
                className={`relative z-10 text-xs font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-white'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BottomNavbar;

