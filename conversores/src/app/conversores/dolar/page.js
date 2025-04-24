'use client'
import { useState } from 'react';

export default function ConversorDolar() {
  const cotacao = 5.69;
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');

  const atualizarReal = (valor) => {
    setReal(valor);
    setDolar((parseFloat(valor) / cotacao).toFixed(2));
  };

  const atualizarDolar = (valor) => {
    setDolar(valor);
    setReal((parseFloat(valor) * cotacao).toFixed(2));
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Conversor Dólar ↔ Real</h1>
      <div className="flex flex-col gap-4 max-w-sm">
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Reais"
          value={real}
          onChange={(e) => atualizarReal(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Dólares"
          value={dolar}
          onChange={(e) => atualizarDolar(e.target.value)}
        />
      </div>
    </main>
  );
}
