import './globals.css'

export const metadata = {
  title: 'Conversores App',
  description: 'Aplicativo para conversão de valores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 font-sans p-4">
        {children}
      </body>
    </html>
  )
}
