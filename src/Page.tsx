import React from 'react'
import logo from './assets/logo.png'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AlarmIcon from '@mui/icons-material/Alarm';
import EventIcon from '@mui/icons-material/Event';

const Page = () => {
  return (
    <div>
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
        <section className='inline-flex mt-20'>
          <p className='p-8 py-4 bg-white ml-20 w-80 rounded-s-lg cursor-pointer'> <CheckBoxIcon/> Scheduling</p>
          <p className='p-8 py-4 bg-white ml-10 w-80 rounded-s-lg cursor-pointer'> <AlarmIcon/> Tasks</p>
          <p className='p-8 py-4 bg-white ml-10 w-80 rounded-s-lg cursor-pointer'>  <EventIcon/> Reminders</p>
        </section>

        <p className='mt-10 text-xl font-bold text-blue-950 ml-96'>The Ultimate Study app</p>
        <p className=' ml-[400px] text-black mt-4 text-xs   '>to keep track of their life</p>
        </section>
      
       
      
      </div>
     
    
    </div>
  )
}

export default Page
