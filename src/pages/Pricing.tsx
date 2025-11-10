// src/pages/Pricing.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Básico',
      price: 'Gratis',
      description: 'Perfecto para empezar',
      features: [
        'Control de tiempo básico',
        'Reportes semanales',
        'Hasta 2 hijos',
        'Soporte por email',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: '/mes',
      description: 'Para familias que buscan más control',
      features: [
        'Control avanzado de apps',
        'Reportes en tiempo real',
        'Hasta 5 hijos',
        'Bloqueos inteligentes',
        'Soporte prioritario',
        'Gamificación avanzada',
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Planes y Precios</h1>
          <p className="text-xl text-gray-300">
            Elige el plan que mejor se adapte a tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-white/5 backdrop-blur-xl rounded-3xl p-8 border ${
                plan.popular
                  ? 'border-purple-500/50 ring-2 ring-purple-500/20'
                  : 'border-white/10'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-semibold text-white">
                  Más Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/auth">
                <Button
                  variant={plan.popular ? 'primary' : 'ghost'}
                  className="w-full"
                >
                  Comenzar
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

