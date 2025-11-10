// src/screens/HomeScreen.tsx

import React from 'react';
import { Power, ChevronRight, Heart } from 'lucide-react';

function HomeScreen() {
  // Calcular el porcentaje del círculo de progreso (ejemplo: 75%)
  const progressPercentage = 75;
  const circumference = 2 * Math.PI * 45; // radio del círculo
  const offset = circumference - (progressPercentage / 100) * circumference;

  return (
    <div className="h-full w-full overflow-y-auto bg-white pb-24 px-5 pt-6">
      
      {/* Componente de Saludo */}
      <div className="mb-6 rounded-2xl bg-teal-100 p-5">
        <h2 className="text-2xl font-bold text-gray-900">Hello, Valeria</h2>
        <div className="mt-2 flex items-center gap-2">
          <p className="text-sm font-medium text-gray-700">
            Hoy es un buen día para reconectar contigo
          </p>
          <Heart className="h-4 w-4 fill-blue-500 text-blue-500" />
        </div>
      </div>

      {/* Tarjeta de Equilibrio (Amarilla) con círculo de progreso */}
      <div className="group relative mb-3 overflow-hidden rounded-3xl bg-yellow-200 p-8 shadow-lg">
        <div className="flex flex-col items-center">
          {/* Círculo de progreso */}
          <div className="relative mb-4">
            <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 100 100">
              {/* Círculo de fondo */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="white"
                strokeWidth="8"
              />
              {/* Círculo de progreso */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#14b8a6"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-1000"
              />
            </svg>
            {/* Texto centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">4h 30m</div>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Equilibrio digital excelente
          </p>
        </div>
      </div>

      {/* Badge de Balance */}
      <div className="mb-6 inline-flex items-center rounded-full bg-gray-100 px-5 py-2.5">
        <span className="text-sm font-semibold text-gray-700">
          ¡Excelente balance digital hoy!
        </span>
      </div>

      {/* Tarjeta de Logros Recientes */}
      <div className="group mb-4 flex cursor-pointer items-center rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500">
          <Power className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-gray-900">Logros recientes</p>
          <p className="mt-0.5 text-sm font-medium text-gray-600">
            Sin redes por <span className="text-lg font-bold text-gray-900">1</span> hora
          </p>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>

      {/* Tarjeta de Cita (Teal) */}
      <div className="rounded-2xl bg-teal-500 p-6 shadow-lg">
        <p className="text-center text-base font-semibold leading-relaxed text-white">
          Desconectarte un momento también es cuidarte.
        </p>
      </div>

    </div>
  );
}

export default HomeScreen;

