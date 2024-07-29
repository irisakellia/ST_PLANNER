import { useState } from 'react'
import Page from './Page'
import Wait from './Wait'
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

 ]);


  return (
    <>
<RouterProvider router={routes}/>
     </>
  )
}

export default App
