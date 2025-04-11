import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-zinc-800 p-4 min-h-screen text-white">
        <Outlet />
      </main>
    </div>
  )
}
