import React from 'react'

import { BiTimeFive } from 'react-icons/bi'

const Products = () => {
  return (
    <div>
      <div className='prodContainer flex gap-10 justify-center flex-wrap items-center py-10'>
        <div className='group group/item singleProduct w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>5Kg bottle</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Available
            </span>
          </span>
          <h6 className='text-[#ccc]'>R280.00</h6>
          <img />
        </div>
      </div>
    </div>
  )
}

export default Products
