import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps): React.JSX.Element {
  const isAuthenticated = false // ALTERAR AQUI DEPOIS PARA UM AUTENTICADOR REAL

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
