export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao App de Conversores</h1>
      <p className="mb-4">Este aplicativo permite converter moedas, temperaturas e medidas. Atividade realizada com intuito de praticar Next.js e Tailwind</p>
      <ul className="space-y-2 underline text-blue-400">
        <li><a href="/conversores/dolar">Conversor Dólar/Real</a></li>
        <li><a href="/conversores/temperatura">Conversor Temperatura</a></li>
        <li><a href="/conversores/comprimento">Conversor Comprimento</a></li>
        <li><a href="/sobre">Sobre</a></li>
      </ul>
    </main>
  );
}
