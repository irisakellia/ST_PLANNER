import React from 'react'
import cartoon from '../public/cartoon.png'
import logo from './assets/logo.png'

const Wait = () => {
  return (
    <>
    <nav className='inline-flex bg-gradient-to-r from-blue-950 via-blue-600 to-blue-300 w-full'>
          <img src={logo} className='ml-4'/>
          <p className='text-white mt-10 ml-2 font-bold text-xl '>My StudyLife</p>
          <p className='text-white font-medium text-xl ml-96 mt-10'>Scheduling</p>
          <p className='text-white font-medium text-xl ml-20 mt-10'>Tasks</p>
          <p className='text-white font-medium text-xl ml-20 mt-10'>Reminders</p>
          <button className='text-white  text-lg ml-40 mt-4 p-4 h-14 rounded-lg bg-customButton'>Sign in</button>
        
        </nav>

    <div className='inline-flex'>
      <img src={cartoon}/>
      <p className='text-blue-950 font-extrabold text-2xl mt-20 ml-20'>You are on the right track</p>
    
    </div>
    <p className='float-right mr-20 pb-4 text-blue-950'> To be able to make a schedule in our app , you need to sign in and join the study community</p>
    </>
  )
}

export default Wait
