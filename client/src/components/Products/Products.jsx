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
          <img src='../assets/gas_05.png' alt='5Kg gas bottle' />
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>*price includes delivery</p>
        </div>

        <div className='group group/item singleProduct w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>9Kg bottle</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Available
            </span>
          </span>
          <h6 className='text-[#ccc]'>R370.00</h6>
          <img src='/assets/gas_09.png' alt='5Kg gas bottle' />
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>*price includes delivery</p>
        </div>

        <div className='group group/item singleProduct w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>12Kg bottle</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>3 days
            </span>
          </span>
          <h6 className='text-[#ccc]'>R580.00</h6>
          <img src='../assets/gas_12.png' alt='5Kg gas bottle' />
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>*price includes delivery</p>
        </div>

        <div className='group group/item singleProduct w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>18Kg bottle</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Available
            </span>
          </span>
          <h6 className='text-[#ccc]'>R750.00</h6>
          <img src='../assets/gas_18.png' alt='5Kg gas bottle' />
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>*price includes delivery</p>
        </div>

      </div>
    </div>
  )
}

export default Products
