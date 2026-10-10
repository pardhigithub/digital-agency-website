import React from 'react'
import Navbar
 from './components/Navbar'
import Home from './pages/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
 
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
