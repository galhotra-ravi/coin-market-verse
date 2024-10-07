import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Coins from './Components/Coins.jsx'
import Exhanges from './Components/Exhanges.jsx'
import About from './Components/About.jsx'
import NotFound from './Components/NotFound.jsx'
import CoinPage from './Components/CoinPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'coins',
        element: <Coins />
      },
      {
        path: 'coins/:coinID',
        element: <CoinPage />
      },
      {
        path: 'exchanges',
        element: <Exhanges />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
