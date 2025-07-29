import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: '/About', element: <About /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Portfolio', element: <Portfolio /> },
      { path: '*', element: <NotFound /> },
    ]
  },
])
function App() {


  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
