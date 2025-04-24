'use client'
import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const atualizarCelsius = (valor) => {
    if (valor === '') {
      setCelsius('');
      setFahrenheit('');
      return;
    }
    const c = parseFloat(valor);
    setCelsius(valor);
    setFahrenheit(((c * 1.8) + 32).toFixed(2));
  };

  const atualizarFahrenheit = (valor) => {
    if (valor === '') {
      setFahrenheit('');
      setCelsius('');
      return;
    }
    const f = parseFloat(valor);
    setFahrenheit(valor);
    setCelsius(((f - 32) / 1.8).toFixed(2));
  };

  return (
    <main className="max-w-sm mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center">Conversor de Temperatura</h1>

      <input
        type="number"
        placeholder="Celsius (°C)"
        value={celsius}
        onChange={(e) => atualizarCelsius(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <input
        type="number"
        placeholder="Fahrenheit (°F)"
        value={fahrenheit}
        onChange={(e) => atualizarFahrenheit(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </main>
  );
}
