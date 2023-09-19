import React from 'react'

// Import icons
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-3 m-auto items-center justify-center'>

      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            Go<strong>GAS</strong>Go
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We are committed to providing the best experience to suit your needs. Our customers are our top priority.
        </p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>

        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>

        <div>
          <small className='text-[14px] text-white '>
            email@mailbox.co.za
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
