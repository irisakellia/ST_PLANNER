import { useState } from 'react'
import logo from '../public/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='inline-flex bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 w-full'>
          <img src={logo} className='ml-4'/>
          <p className='text-white mt-10 ml-2 font-bold text-xl '>My StudyLife</p>
          <p className='text-white font-medium text-xl ml-96 mt-10'>Scheduling</p>
          <p className='text-white font-medium text-xl ml-4 mt-10'>Tasks</p>
          <button className='text-white bg-transparent text-lg '>Sign in</button>
        
        </nav>
       
      
      </div>
     
    </>
  )
}

export default App
