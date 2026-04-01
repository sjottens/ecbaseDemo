import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import InstellingenPage from './pages/InstellingenPage.jsx'
import OrderpickenPage from './pages/OrderpickenPage.jsx'
import PrintKlantkaartjesPage from './pages/PrintKlantkaartjesPage.jsx'
import PrintlabelsPage from './pages/PrintlabelsPage.jsx'
import PrintProductstickersPage from './pages/PrintProductstickersPage.jsx'
import ProductiePage from './pages/ProductiePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/orderpicken" element={<OrderpickenPage />} />
        <Route path="/productie" element={<ProductiePage />} />
        <Route path="/printlabels" element={<PrintlabelsPage />} />
        <Route path="/printlabels/klantkaartjes" element={<PrintKlantkaartjesPage />} />
        <Route path="/printlabels/productstickers" element={<PrintProductstickersPage />} />
        <Route path="/instellingen" element={<InstellingenPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
