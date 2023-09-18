import React from 'react'

import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

          <div className='flex gap-2 items-center'>
              <AiOutlineSearch className='text-[25px] icon'/>
              <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by product' />
                <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <div className='flex gap-2 items-center'>
              <BsHouseDoor className='text-[25px] icon'/>
              <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by company' />
                <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <div className='flex gap-2 items-center'>
              <CiLocationOn className='text-[25px] icon'/>
              <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by location' />
                <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>

        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center'>

      </div>

    </div>
  )
}

export default Search
