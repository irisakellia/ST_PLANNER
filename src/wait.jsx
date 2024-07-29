import React from 'react'
import cartoon from '../public/cartoon.png'

const wait = () => {
  return (
    <div className='inline-flex'>
      <img src={cartoon}/>
      <p>You are on the right track</p>
      <p> To be able to make a schedule in our app , you need to sign and join the study community</p>
    </div>
  )
}

export default wait
