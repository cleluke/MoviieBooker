import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reservation" element={<Reservation />} />
          </Routes>
      </Router>
  </StrictMode>,
)
