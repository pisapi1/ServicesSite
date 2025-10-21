import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Schedule from './components/Schedule'
import Contact from './components/Contact'

function App() {

  return (
    <Router>
      <div>
        <Header /> {/* Can use Link, useLocation, etc. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> {/* Can also use routing if needed */}
      </div>
    </Router>
  )
}

export default App
