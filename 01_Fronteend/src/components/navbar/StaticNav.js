import React from 'react'
import { HiBars3 } from "react-icons/hi2";
import n2 from '../../assets/logos/n-2.jpg'
const menu = [
     {
          id : 1,
          text : "Fresh"
     },
     {
          id : 2,
          text : "Amazon miniTV"
     },
     {
          id : 3,
          text : "Sell"
     },
     {
          id : 4,
          text : "Best Sellers"
     },
     {
          id : 5,
          text : "Today's Deals"
     },
     {
          id : 6,
          text : "Mobiles"
     },
     {
          id : 7,
          text : "Electronics"
     },
]

const StaticNav = ()=> {
  return (
    <div className='bg-gray-800 h-10 w-full flex flex-row p-1 items-center justify-between'>
          <div className='text-white w-full cursor-pointer'>
               <ul className='flex flex-row gap-3'>

                    <li className='flex flex-row hover:border hover:scale-95 p-1'><HiBars3 size={25} />All</li>
                    {
                         menu.map(({id,text})=>(
                              <li key={id} className='hover:border hover:scale-95 p-1'>{text}</li>
                         ))
                    }
               </ul>
          </div>

          <div className='flex flex-row items-center justify-center hover:border hover:scale-95 p-1 cursor-pointer'>
               <img src={n2} alt=''/>
          </div>
    </div>
  )
}

export default StaticNav