import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './templete/home/Home'
import Nav from './templete/nav/Nav'
import Headers from './templete/headers/Headers'
import Login from './templete/login/Login'
import Product from './templete/product/Product'
import About from './templete/about/About'
import Contact from './templete/contact/Contact'
import Dashbord from './templete/dashbord/Dashbord'
import Connector from './templete/connector/Connector'
import Employee from './templete/employee/Employee'
import Cheack from './templete/cheack/Cheack'
import Partners from './templete/partners/Partners'
import AddAopenLead from './templete/addAopenLead/AddAopenLead'
import Setting from './templete/setting/Setting'
import Report from './templete/report/Report'

const App = () => {
  const auth = localStorage.getItem('email')
  const routes2 = createBrowserRouter(
    [
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'*',
        element:<Login/>
      }
    ]
  )
  const routeS = createBrowserRouter(
    [
      {
        path: '/',
        element: <><Headers /><Nav /><Home /></>
      },
      {
        path:'/api/product/all/data/v4',
        element:<><Headers/><Nav/><Product/></>
      },
      {
        path:'/about/us/api/v4',
        element:<><Headers/><Nav/><About/></>
      },
      {
        path:'/contact/us/api/v4',
        element:<><Headers/><Nav/><Contact/></>
      },
      {
        path:'/user/api/dashbord/api/v4',
        element: <><Headers/><Nav/><Dashbord/></>
      },
      {
        path:'/add/connector/api/v4',
        element:<><Headers/><Nav/><Connector/></>
      },
      {
        path:'/add/employee/api/v4',
        element:<><Headers/><Nav/><Employee/></>
      },
      {
        path:'/our/partners/api/v4',
        element:<><Headers/><Nav/><Partners/></>
      },
      {
        path:'/cheack/buero/api/v4',
        element:<><Headers/><Nav/><Cheack/></>
      },
      {
        path:'/add/open/account/lead/api/v4',
        element:<><Headers/><Nav/><AddAopenLead/></>
      },
      {
        path:'/setting',
        element:<><Headers/><Nav/><Setting/></>
      },
      {
        path:'/report',
        element:<><Headers/><Nav/><Report/></>
      }
    ]
  )
  return (
   <RouterProvider router={ auth !== null ? routeS : routes2} /> 
  )
}

export default App