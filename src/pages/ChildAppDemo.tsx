// src/pages/ChildAppDemo.tsx

import { useState, useEffect } from 'react';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LogrosScreen from '../screens/LogrosScreen';
import ActividadScreen from '../screens/ActividadScreen';
import RetosScreen from '../screens/RetosScreen';
import BottomNavbar from '../components/BottomNavbar';

// Versión demo de ChildApp para usar en la landing (sin requerir autenticación)
export function ChildAppDemo() {
  const [activeTab, setActiveTab] = useState<'home' | 'logros' | 'actividad' | 'retos'>('home');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Mostrar splash screen por 2 segundos al cargar la app
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Función para renderizar la pantalla actual según el tab activo
  const renderCurrentScreen = () => {
    if (showSplash) {
      return <SplashScreen />;
    }

    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'logros':
        return <LogrosScreen />;
      case 'actividad':
        return <ActividadScreen />;
      case 'retos':
        return <RetosScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="relative h-full w-full flex flex-col">
      {/* Contenedor con scroll para las pantallas */}
      <div className="flex-1 w-full overflow-y-auto pb-20">
        {renderCurrentScreen()}
      </div>

      {/* Barra de navegación inferior fija - solo se muestra después de la splash */}
      {!showSplash && (
        <BottomNavbar activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
}

