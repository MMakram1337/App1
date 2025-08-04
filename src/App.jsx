import './App.css'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import NotFound from './Components/NotFound/NotFound';
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
