import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login'
import Layout from '@/components/Layout'
import PrivateRoute from '@/routes/PrivateRoute'

function App() {
  return (
    <Routes>
      {/* Login fora do layout,  rota pública */}
      <Route path="/login" element={<Login />} />

      {/* Rotas protegidas com layout, em que possuem o cabeçalho */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App