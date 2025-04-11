import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de autenticação: salva um token fake
    login('token-fake-123')
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Acesso ao Sistema
        </h2>

        <label className="block mb-2 text-sm font-medium text-white">E-mail</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border border-gray-600 rounded-md bg-zinc-700 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium text-white">Senha</label>
        <input
          type="password"
          className="w-full p-2 mb-6 border border-gray-600 rounded-md bg-zinc-700 text-white"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-amber-500 text-white p-2 rounded-md hover:bg-amber-600 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
