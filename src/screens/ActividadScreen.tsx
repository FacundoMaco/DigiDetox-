// src/screens/ActividadScreen.tsx

import React from 'react';
import { Activity, TrendingUp, Flame, MapPin } from 'lucide-react';
import { mockActividadFisica } from '../data/mockData';

function ActividadScreen() {
  const { pasos, metaPasos, minutosActivos, metaMinutos, calorias, distancia, historialSemanal } = mockActividadFisica;
  const porcentajePasos = Math.min((pasos / metaPasos) * 100, 100);
  const porcentajeMinutos = Math.min((minutosActivos / metaMinutos) * 100, 100);

  return (
    <div className="h-full w-full overflow-y-auto bg-white pb-24 px-5 pt-6">
      {/* Header */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-5">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Actividad Física</h2>
        <p className="text-sm text-gray-600">Mantente activo y saludable</p>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Pasos */}
        <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-5 border border-green-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Pasos</span>
            <Activity className="h-5 w-5 text-green-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {pasos.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">
            Meta: {metaPasos.toLocaleString()}
          </div>
          {/* Barra de progreso */}
          <div className="mt-3 h-2 w-full rounded-full bg-green-200 overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-500"
              style={{ width: `${porcentajePasos}%` }}
            />
          </div>
        </div>

        {/* Minutos activos */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Minutos</span>
            <TrendingUp className="h-5 w-5 text-blue-500" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {minutosActivos}
          </div>
          <div className="text-xs text-gray-500">
            Meta: {metaMinutos} min
          </div>
          {/* Barra de progreso */}
          <div className="mt-3 h-2 w-full rounded-full bg-blue-200 overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${porcentajeMinutos}%` }}
            />
          </div>
        </div>
      </div>

      {/* Estadísticas adicionales */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-2xl bg-orange-50 p-5 border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-gray-600">Calorías</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{calorias}</div>
          <div className="text-xs text-gray-500 mt-1">kcal quemadas</div>
        </div>

        <div className="rounded-2xl bg-purple-50 p-5 border border-purple-200">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-medium text-gray-600">Distancia</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{distancia.toFixed(1)}</div>
          <div className="text-xs text-gray-500 mt-1">kilómetros</div>
        </div>
      </div>

      {/* Historial semanal */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Esta Semana</h3>
        <div className="rounded-2xl bg-gray-50 p-5 border border-gray-200">
          <div className="space-y-4">
            {historialSemanal.map((dia, index) => {
              const porcentajeDia = (dia.pasos / metaPasos) * 100;
              return (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-semibold text-gray-700">{dia.dia}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{dia.pasos.toLocaleString()} pasos</span>
                      <span className="text-xs text-gray-500">{dia.minutos} min</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(porcentajeDia, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mensaje motivacional */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-center">
        <p className="text-base font-semibold leading-relaxed text-white">
          ¡Mantente activo! La actividad física mejora tu bienestar general.
        </p>
      </div>
    </div>
  );
}

export default ActividadScreen;

