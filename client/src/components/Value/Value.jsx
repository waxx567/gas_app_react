import React from 'react'

// Import images
import logos from '../../assets/visa-mcard-logo.png'

const Value = () => {
  return (
    <div className='mt-[6rem] mb-[4rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block'>Try us for the best service</h1>
      <div>
        <img src={logos} alt='card logos' className='m-auto w-[300px]' />
      </div>

      {/* <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[200px] w-[200px] flex items-center justify-center'>
              <img src={logos} alt='card logos' />
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default Value
