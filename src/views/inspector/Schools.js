import React from "react"

const Schools = () => {
  return (
    <div className='mt-48'>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <h6 className='text-lightBlue-800 text-sm mt-3 mb-6 font-bold uppercase'>
            Add Schools
          </h6>
          <form>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    School Name
                  </label>
                  <input
                    type='text'
                    placeholder='Enter School Name'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                </div>
              </div>
              <div className='w-full lg:w-6/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Place
                  </label>
                  <input
                    type='text'
                    placeholder='Place'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  />
                </div>
              </div>
              <div className='w-full lg:w-6/12 px-4'>
                <br />
                <button class='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 border float-right border-blue-700 rounded '>
                  Add
                </button>
              </div>
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />

            <h6 className='text-lightBlue-800 text-sm mt-3 mb-6 font-bold uppercase'>
              Schools
            </h6>
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-12/12 px-4'></div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    School Name
                  </label>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Chikkon School'
                  />
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Place
                  </label>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Playa el Yaque'
                  />
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <label
                    className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Action
                  </label>
                  <button class='bg-emerald-400 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded '>
                    <i className='fa fa-edit'></i>
                  </button>
                  <button class='bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded '>
                    <i className='fa fa-minus'></i>
                  </button>
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
                    defaultValue='Butler School'
                  />
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative w-full mb-3'>
                  <input
                    type='email'
                    className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    defaultValue='Heyb habs'
                  />
                </div>
              </div>
              <div className='w-full lg:w-4/12 px-4'>
                <button class='bg-emerald-400 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded '>
                  <i className='fa fa-edit'></i>
                </button>
                <button class='bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded '>
                  <i className='fa fa-minus'></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='w-full xl:w-4/12 px-4'>{/* <CardBarChart /> */}</div>
      </div>
    </div>
  )
}

export default Schools
