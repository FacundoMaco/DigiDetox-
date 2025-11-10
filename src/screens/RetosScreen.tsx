// src/screens/RetosScreen.tsx

import { CheckCircle2, Clock, Trophy, Target } from 'lucide-react';
import { mockRetos } from '../data/mockData';

function RetosScreen() {
  const retosCompletados = mockRetos.filter(r => r.completado);
  const retosEnProgreso = mockRetos.filter(r => !r.completado);
  const totalPuntos = retosCompletados.reduce((sum, r) => sum + r.puntos, 0);

  const getTipoBadge = (tipo: string) => {
    const badges = {
      diario: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Diario' },
      semanal: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Semanal' },
      mensual: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'Mensual' },
    };
    return badges[tipo as keyof typeof badges] || badges.diario;
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-white pb-24 px-5 pt-6">
      {/* Header */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Retos Completos</h2>
            <p className="text-sm text-gray-600 mt-1">
              {retosCompletados.length} completados • {retosEnProgreso.length} en progreso
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold text-gray-900">{totalPuntos}</span>
            </div>
            <p className="text-xs text-gray-600">puntos ganados</p>
          </div>
        </div>
      </div>

      {/* Retos Completados */}
      {retosCompletados.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Completados ({retosCompletados.length})
          </h3>
          <div className="space-y-3">
            {retosCompletados.map((reto) => {
              const badge = getTipoBadge(reto.tipo);
              return (
                <div
                  key={reto.id}
                  className="flex items-center gap-4 rounded-2xl bg-green-50 p-4 border-2 border-green-200"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-2xl">
                    {reto.icono}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{reto.titulo}</h4>
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{reto.descripcion}</p>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs font-semibold text-gray-700">
                        🏆 {reto.puntos} puntos
                      </span>
                      {reto.fechaCompletado && (
                        <span className="text-xs text-gray-500">
                          {new Date(reto.fechaCompletado).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Retos en Progreso */}
      {retosEnProgreso.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-500" />
            En Progreso ({retosEnProgreso.length})
          </h3>
          <div className="space-y-3">
            {retosEnProgreso.map((reto) => {
              const badge = getTipoBadge(reto.tipo);
              return (
                <div
                  key={reto.id}
                  className="flex items-center gap-4 rounded-2xl bg-blue-50 p-4 border border-blue-200"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-400 text-2xl">
                    {reto.icono}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{reto.titulo}</h4>
                      <Clock className="h-4 w-4 text-blue-500 shrink-0" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{reto.descripcion}</p>
                    {/* Barra de progreso */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Progreso</span>
                        <span className="text-xs font-semibold text-gray-700">{reto.progreso}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-blue-200 overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${reto.progreso}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badge.bg} ${badge.text}`}>
                        {badge.label}
                      </span>
                      <span className="text-xs font-semibold text-gray-600">
                        🏆 {reto.puntos} puntos
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Mensaje motivacional */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-6 text-center">
        <p className="text-base font-semibold leading-relaxed text-white">
          ¡Sigue completando retos y gana más puntos!
        </p>
      </div>
    </div>
  );
}

export default RetosScreen;

