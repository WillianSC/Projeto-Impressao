import { Navigate } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'

export default function PrivateRoute({ children }: { children: React.JSX.Element }) {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? children : <Navigate to="/login" />
}
