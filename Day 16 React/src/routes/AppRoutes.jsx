import React from 'react'
import { createBrowserRouter , RouterProvider} from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<AuthLayout />,
            children:[
                {
                    path:"",
                    element:<LoginPage />
                },
                {
                    path:"register",
                    element:<RegisterPage />
                }
            ]
        }
    ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default AppRoutes
