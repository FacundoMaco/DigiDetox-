// src/screens/SplashScreen.tsx

import React from 'react';

function SplashScreen() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center bg-gradient-to-br from-teal-50 via-white to-yellow-50 p-6">
      {/* Logo o ícono de la app - Mejorado con gradiente y sombra */}
      <div className="mb-8 animate-in">
        <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-500 to-teal-400 shadow-xl">
          <span className="text-5xl font-bold text-white">D+</span>
        </div>
      </div>

      {/* Nombre de la app - Con animación */}
      <h1 className="mb-3 animate-in delay-150 text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        DigiDetox+
      </h1>
      
      {/* Subtítulo o tagline - Con animación */}
      <p className="animate-in delay-300 text-center text-gray-600 font-medium">
        Tu bienestar digital comienza aquí
      </p>

      {/* Indicador de carga mejorado */}
      <div className="mt-10 animate-in delay-500">
        <div className="relative h-1.5 w-40 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-teal-500 to-teal-400"></div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;

