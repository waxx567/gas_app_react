import React from 'react'

const Footer = () => {
  return (
    <div className='p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center'>

      <div className='flex'>

        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            Go<strong>Gas</strong>Go
          </h1>
          <p className='text-[12px] text-white pb-[13px] opacity-70 leading-7'>
            We are committed to providing the best experience to suit your needs
          </p>
        </div>

        <div className='grid'>
          <p className='text-white opacity-70 leading-7'>
            email@gogasgo.com
          </p>
          <p className='text-white opacity-70 leading-7'>
            (087)7008087          
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer
