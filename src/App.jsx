import { useState } from 'react'
import logo from '../public/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='inline-flex'>
          <img src={logo}/>
          <p className='text-orange-500 mt-10'>My StudyLife</p>
          <p>Scheduling</p>
          <p>Tasks</p>
        
        </nav>
       
      
      </div>
     
    </>
  )
}

export default App
