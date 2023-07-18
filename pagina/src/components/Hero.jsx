import React from 'react'
import Create from './Create';

const Hero = () => {
  return (
    
    <div>
      <div className="flex justify-center items-center h-48 -mb-52 mt-10">
      <h1 className="bg-transparent hover:text-8xl text-white text-8xl font-rubik">¡KACHI-PUM!</h1>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div className="max-w-2xl"> 
          <img src='https://i.gyazo.com/71c3da5166a17a55836987f0878dcb99.gif' alt='hola' className="mx-auto h-auto max-w-full border-2 border-white  rounded-2xl  hover:border-rosado">
          
          </img>
        </div>
      </div>
    </div>


  )
}

export default Hero;