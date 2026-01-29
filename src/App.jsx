import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List.jsx';
import Mod from './pages/Mod.jsx';
import Del from './pages/Del.jsx';
import Update from './pages/Update.jsx';
import Single from './pages/Single.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/mod" element={<Mod />} />
        <Route path="/del" element={<Del />} />
        <Route path="/update" element={<Update />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
