import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Customers from './components/Customers/Customers.jsx'
import Payments from './components/Payments/Payments.jsx'
import Reports from './components/Reports/Reports.jsx'
import Sales from './components/Sales/Sales.jsx'
import About from './components/About/About.jsx'
import Inventory from './components/Inventory/Inventory.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        path:"",
        element:<Home />
      },
      {
        path:"Customers",
        element:<Customers />
      },
      {
        path:"Payments",
        element:<Payments />
      },
      {
        path:"Reports",
        element:<Reports />
      },
      {
        path:"Sales",
        element:<Sales />
      },
      {
        path:"Inventory",
        element:<Inventory />
      },
      {
        path:"About",
        element:<About />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
