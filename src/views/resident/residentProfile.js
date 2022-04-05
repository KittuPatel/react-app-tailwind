import React from "react"


const School = () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <div className='mt-48'>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <h6 className='text-lightBlue-800 text-sm mt-3 mb-6 font-bold uppercase'>
            Profile
          </h6>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                        <strong>Name:</strong> {userInfo['name']}
                    </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                        <strong>Email:</strong> {userInfo['email']}
                    </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                        <strong strong>Phone Number:</strong> +1 {userInfo['phone']}
                    </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                        <strong>Date of Birth:</strong> {userInfo['dob']}
                    </div>
                </div>
                <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                        <strong strong>Address: </strong> {userInfo['address']}
                    </div>
                </div>
            </div>

            <hr className='mt-6 border-b-1 border-blueGray-300' />
        </div>
        <div className='w-full xl:w-4/12 px-4'>{/* <CardBarChart /> */}</div>
      </div>
    </div>
  )
}

export default School
