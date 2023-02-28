import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Investor from "./pages/Investor";
import Partner from "./pages/Partner";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Investor" element={<Investor />} />
          <Route path="Partner" element={<Partner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
