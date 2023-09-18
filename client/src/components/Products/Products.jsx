import React from 'react'

// Import icons
import { BiTimeFive } from 'react-icons/bi'

// Import images
import gas05 from '../../assets/gas_05.png'
import gas09 from '../../assets/gas_09.png'
import gas12 from '../../assets/gas_12.png'
import gas18 from '../../assets/gas_18.png'

// Array to store products
const Data = [
  {
    id: 1,
    title: '5Kg bottle',
    time: 'Available',
    image: gas05,
    price: 'R300.00',
    desc: 'Price is for empty bottle exchange and includes delivery'
  },
  {
    id: 2,
    title: '9Kg bottle',
    time: 'Available',
    image: gas09,
    price: 'R390.00',
    desc: 'Price is for empty bottle exchange and includes delivery'
  },
  {
    id: 3,
    title: '12Kg bottle',
    time: 'Available',
    image: gas12,
    price: 'R580.00',
    desc: 'Price is for empty bottle exchange and includes delivery'
  },
  {
    id: 4,
    title: '18Kg bottle',
    time: 'Available',
    image: gas18,
    price: 'R850.00',
    desc: 'Price is for empty bottle exchange and includes delivery'
  }
]

const Products = () => {
  return (
    <div>
      {/* Product container */}
      <div className='prodContainer flex gap-10 justify-center flex-wrap items-center py-10'>

        {/* Display each product */}
        {
          Data.map(({id, image, title, time, price, desc}) =>{
            return (
              <div key={id} className='group group/item singleProduct w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
                <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                </span>
                </span>
                <h6 className='text-[#ccc]'>{price}</h6>
                <img src={image} alt='gas bottle' />
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                  {desc}
                </p>
                <button className='border-[2px] rounded-[10px] block p-[10px] mt-[20px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                  Order item
                </button>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Products
