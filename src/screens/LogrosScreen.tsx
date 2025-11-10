// src/screens/LogrosScreen.tsx

import { Award, CheckCircle2, Star } from 'lucide-react';
import { mockLogros } from '../data/mockData';

function LogrosScreen() {
  const logrosCompletados = mockLogros.filter(l => l.completed);
  const logrosPendientes = mockLogros.filter(l => !l.completed);
  const totalPuntos = logrosCompletados.reduce((sum, l) => sum + l.points, 0);

  return (
    <div className="h-full w-full overflow-y-auto bg-white pb-24 px-5 pt-6">
      {/* Header con puntos totales */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Tus Logros</h2>
            <p className="text-sm text-gray-600 mt-1">
              {logrosCompletados.length} de {mockLogros.length} completados
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold text-gray-900">{totalPuntos}</span>
            </div>
            <p className="text-xs text-gray-600">puntos totales</p>
          </div>
        </div>
      </div>

      {/* Logros Completados */}
      {logrosCompletados.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Completados ({logrosCompletados.length})
          </h3>
          <div className="space-y-3">
            {logrosCompletados.map((logro) => (
              <div
                key={logro.id}
                className="flex items-center gap-4 rounded-2xl bg-green-50 p-4 border-2 border-green-200"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-2xl">
                  {logro.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-gray-900">{logro.title}</h4>
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">{logro.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-gray-700">{logro.points} puntos</span>
                    {logro.completedDate && (
                      <span className="text-xs text-gray-500">
                        • {new Date(logro.completedDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Logros Pendientes */}
      {logrosPendientes.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-gray-400" />
            Pendientes ({logrosPendientes.length})
          </h3>
          <div className="space-y-3">
            {logrosPendientes.map((logro) => (
              <div
                key={logro.id}
                className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4 border border-gray-200 opacity-75"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-300 text-2xl">
                  {logro.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-700">{logro.title}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{logro.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-4 w-4 text-gray-400" />
                    <span className="text-xs font-semibold text-gray-500">{logro.points} puntos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mensaje motivacional */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
        <p className="text-base font-semibold leading-relaxed text-white">
          ¡Sigue así! Cada logro te acerca a un mejor equilibrio digital.
        </p>
      </div>
    </div>
  );
}

export default LogrosScreen;

