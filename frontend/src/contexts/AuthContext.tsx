import { createContext, useContext, useState, ReactNode } from 'react'

// Definindo a estrutura dos dados do contexto
interface AuthContextType {
  isAuthenticated: boolean
  login: (token: string) => void
  logout: () => void
}

// Criando o contexto (com valor inicial "undefined")
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Componente que fornece o contexto para a aplicação
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null)

  // Simula login
  const login = (fakeToken: string) => {
    setToken(fakeToken)
  }

  // Simula logout
  const logout = () => {
    setToken(null)
  }

  const value = {
    isAuthenticated: !!token, // true se tiver token
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook para usar o contexto em qualquer lugar do app
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return context
}
