import React from "react"

// components

export default function CardPageVisits() {
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className='font-semibold text-base text-blueGray-700'>
                Page visits
              </h3>
            </div>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1 text-right'>
              <button
                className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <tbody>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  New Residents Today
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  10
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-arrow-up text-emerald-500 mr-4'></i>
                  46,53%
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  New Business Registered
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  4
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-arrow-down text-orange-500 mr-4'></i>
                  46,53%
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  Resident Moving out today
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  15
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-arrow-down text-orange-500 mr-4'></i>
                  36,49%
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  New Clinics
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  14
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-arrow-up text-emerald-500 mr-4'></i>
                  50,87%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
