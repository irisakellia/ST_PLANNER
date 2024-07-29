import { useState } from 'react'
import Page from './Page'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const routes  = createBrowserRouter([
    {
      path:'/',
      element:<Page/>,
    },
    {
      path:'/wait',
      element:<Wait/>,
    }
  ])


  return (
    <>
<RouterProvider router={routes}/>
     </>
  )
}

export default App
