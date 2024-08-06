import { useState } from 'react'
import Page from './Page'
import Wait from './Wait'
import SignIn from './SignIn'
import Login from './Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'



function App() {
 const routes = createBrowserRouter([
  {
    path:'/',
    element:<Page/>
  },
  {
    path:'/wait',
    element:<Wait/>,

  }, 
  {
    path:'/sign',
    element:<SignIn/>,
  },
  {
    path:'/login',
    element:<Login/>,
  },

 ]);


  return (
    <>
<RouterProvider router={routes}/>
     </>
  )
}

export default App
