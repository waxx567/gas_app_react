import React from 'react'

// Import icons
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const Footer = () => {
  return (
    <div className='p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-2 m-auto items-center justify-center'>

      <div className='logoDiv w-[200px]'>
        <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
        Go<strong>GAS</strong>Go
        </h1>
        <p className='text-[12px] text-white pb-[13px] opacity-70 leading-7'>
        We are committed to providing the best experience to suit your needs
        </p>
      </div>

      <div className='grid w-[250px] gap-3'>

        <div className='flex'>
          <p className='text-white opacity-70 leading-7 items-center pt-1.5'>
            <AiOutlineMail/>
          </p>
          <p className='text-white opacity-70 leading-7 ml-2'>
            email@goGASgo.com
          </p>   
        </div>
        
        <div className='flex'>
          <p className='text-white opacity-70 leading-7 items-center pt-1.5'>
            <AiOutlinePhone/>          
          </p>
          <p className='text-white opacity-70 leading-7 ml-2'>
            +27 87 700 8087          
          </p>            
        </div>

        <div className='flex'>
          <p className='text-white opacity-70 leading-7 items-center pt-1.5'>
            <CiLocationOn/>         
          </p>
          <p className='text-white opacity-70 leading-7 ml-2'>
            123 Main Street, Big City, Inlandia          
          </p>
        </div>

      </div>

    </div>
  )
}

export default Footer
