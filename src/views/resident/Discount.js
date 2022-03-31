import React from "react"

const Discount = () => {
  return (
    <div className='mt-48'>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <h6 className='text-lightBlue-800 text-sm mt-3 mb-6 font-bold uppercase'>
            Discounts exclusively for you
          </h6>
          <form>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'></div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Name
                  </label>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Clinic'
                  />
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Discount %
                  </label>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='10%'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'></div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Hotels'
                  />
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='15%'
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='w-full xl:w-4/12 px-4'>{/* <CardBarChart /> */}</div>
      </div>
    </div>
  )
}

export default Discount
