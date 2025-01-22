import React from 'react'
import lay1 from '../../assets/images/layanan/lay1.png'
import { MdArrowOutward } from "react-icons/md";


function Layanan() {
  return (
    <div className='grid grid-cols-1 h-fit bg-white'>
      <div className='my-10 space-y-3 md:space-y-6'>
        <div className='mx-4 md:mx-20'>
          <h1 className='text-2xl md:text-5xl font-light'>Layanan Kami</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-0.5 md:gap-2'>
          <div className='relative'>
            <div className='relative'>
              <img className='w-full h-60 md:h-full object-cover inset-0 rounded-xl' src={lay1} alt="" />
              <div className='absolute bottom-3 md:bottom-3 left-5 w-5/6 md:w-4/5 '>
                <div className='flex justify-between '>
                  <div className='shadow-xl p-1 bg-gray-700 bg-opacity-50  rounded-xl my-auto px-4'>
                    <h1 className='text-white text-xl md:text-2xl font-sans'>
                      Kemasan Produk
                    </h1>
                  </div>
                  <div className='p-1 bg-gray-700 rounded-full shadow-xl bg-opacity-50'>
                    <MdArrowOutward className='text-white w-10 h-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='relative'>
              <img className='w-full h-60 md:h-full object-cover inset-0 rounded-xl' src={lay1} alt="" />
              <div className='absolute bottom-3 md:bottom-3 left-5 w-5/6 md:w-4/5 '>
                <div className='flex justify-between '>
                  <div className='shadow-xl p-1 bg-gray-700 bg-opacity-50  rounded-xl my-auto px-4'>
                    <h1 className='text-white text-xl md:text-2xl font-sans'>
                      Kemasan Produk
                    </h1>
                  </div>
                  <div className='p-1 bg-gray-700 rounded-full shadow-xl bg-opacity-50'>
                    <MdArrowOutward className='text-white w-10 h-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='relative'>
              <img className='w-full h-60 md:h-full object-cover inset-0 rounded-xl' src={lay1} alt="" />
              <div className='absolute bottom-3 md:bottom-3 left-5 w-5/6 md:w-4/5 '>
                <div className='flex justify-between '>
                  <div className='shadow-xl p-1 bg-gray-700 bg-opacity-50  rounded-xl my-auto px-4'>
                    <h1 className='text-white text-xl md:text-2xl font-sans'>
                      Kemasan Produk
                    </h1>
                  </div>
                  <div className='p-1 bg-gray-700 rounded-full shadow-xl bg-opacity-50'>
                    <MdArrowOutward className='text-white w-10 h-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='relative'>
              <img className='w-full h-60 md:h-full object-cover inset-0 rounded-xl' src={lay1} alt="" />
              <div className='absolute bottom-3 md:bottom-3 left-5 w-5/6 md:w-4/5 '>
                <div className='flex justify-between '>
                  <div className='shadow-xl p-1 bg-gray-700 bg-opacity-50  rounded-xl my-auto px-4'>
                    <h1 className='text-white text-xl md:text-2xl font-sans'>
                      Kemasan Produk
                    </h1>
                  </div>
                  <div className='p-1 bg-gray-700 rounded-full shadow-xl bg-opacity-50'>
                    <MdArrowOutward className='text-white w-10 h-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Layanan