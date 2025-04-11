import { createContext, useContext, useEffect, useState } from 'react'

// Autenticação
interface AuthContextType {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provedor de autenticação
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verifica se há token salvo no localStorage
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook personalizado para acessar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth precisa estar dentro de AuthProvider')
  return context
}