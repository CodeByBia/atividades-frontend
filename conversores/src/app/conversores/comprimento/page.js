'use client'
import { useState } from 'react';

export default function ConversorMedidas() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');

  const atualizarMetros = (valor) => {
    const m = parseFloat(valor) || 0;
    setMetros(valor);
    setPes((m * 3.28084).toFixed(2));
    setPolegadas((m * 39.3701).toFixed(2));
  };

  const atualizarPes = (valor) => {
    const ft = parseFloat(valor) || 0;
    setPes(valor);
    const m = ft / 3.28084;
    setMetros(m.toFixed(2));
    setPolegadas((m * 39.3701).toFixed(2));
  };

  const atualizarPolegadas = (valor) => {
    const inch = parseFloat(valor) || 0;
    setPolegadas(valor);
    const m = inch / 39.3701;
    setMetros(m.toFixed(2));
    setPes((m * 3.28084).toFixed(2));
  };

  return (
    <main className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center">Conversor de Medidas</h1>

      <input
        type="number"
        placeholder="Metros"
        value={metros}
        onChange={(e) => atualizarMetros(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <input
        type="number"
        placeholder="Pés"
        value={pes}
        onChange={(e) => atualizarPes(e.target.value)}
        className="border rounded px-3 py-2"
      />

      <input
        type="number"
        placeholder="Polegadas"
        value={polegadas}
        onChange={(e) => atualizarPolegadas(e.target.value)}
        className="border rounded px-3 py-2"
      />
    </main>
  );
}
