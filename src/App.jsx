import { useState } from 'react'
import Page from './Page'
import Wait from './Wait'
import Signin from './Signin'
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
    path:'/signin',
    element:<Signin/>,
  },

 ]);


  return (
    <>
<RouterProvider router={routes}/>
     </>
  )
}

export default App
