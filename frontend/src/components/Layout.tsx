import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <header className="bg-zinc-700 text-zinc-100 py-4 px-8 shadow-md">
        <h1 className="text-xl font-semibold tracking-wide text-center">Bem-vindo ao Sistema de Impressão</h1>
      </header>

      <main className="flex items-center justify-center p-4 min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
    </div>
  )
}
