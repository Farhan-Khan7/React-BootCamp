import React from 'react'
import {createBrowserRouter , RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import MainLayout from '../Layout/MainLayout'

const AppRouter = () => {

    let router = createBrowserRouter([

        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "services",
                    element: <Services />
                }
            ]
        }

    ])

  return (
    
    <RouterProvider  router={router}></RouterProvider>
  )

}


export default AppRouter