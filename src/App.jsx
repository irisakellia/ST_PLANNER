import { useState } from 'react'
import logo from '../public/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='inline-flex bg-gradient-to-r from-blue-950 via-blue-600 to-blue-300 w-full'>
          <img src={logo} className='ml-4'/>
          <p className='text-white mt-10 ml-2 font-bold text-xl '>My StudyLife</p>
          <p className='text-white font-medium text-xl ml-96 mt-10'>Scheduling</p>
          <p className='text-white font-medium text-xl ml-20 mt-10'>Tasks</p>
          <p className='text-white font-medium text-xl ml-20 mt-10'>Reminders</p>
          <button className='text-white  text-lg ml-40 mt-4 p-4 h-14 rounded-lg bg-customButton'>Sign in</button>
        
        </nav>
<section className='bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 h-[700px]'> 
        <p className='pt-20 text-3xl font-extrabold ml-40 text-blue-950 '>Never forget a class or assignment again.</p>
        </section>
        <section>
          
        </section>
       
      
      </div>
     
    </>
  )
}

export default App
