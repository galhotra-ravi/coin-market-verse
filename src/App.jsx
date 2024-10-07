import { useState } from 'react'
import './App.css'
import Nav from './Components/Header/Nav'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Home />
    <Footer />
    </>
  )
}

export default App
