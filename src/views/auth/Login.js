import React from "react"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const history = useHistory()

  const handleLogin = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const usertype = document.getElementById("usertype").value

    if (email === "" || password === "" || usertype === "") {
      alert("Please fill in all fields")
    } else {
      if (usertype === "admin") {
        history.push("/admin/dashboard")
      } else if (usertype === "resident") {
        history.push("/resident")
      } else {
        history.push("/inspector")
      }
    }
  }

  return (
    <>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-blueGray-500 text-sm font-bold'>
                    Sign in with
                  </h6>
                </div>
                <hr className='mt-6 border-b-1 border-blueGray-300' />
              </div>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <form>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Email'
                      id='email'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Password'
                      id='password'
                    />
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='usertype'
                    >
                      User Type
                    </label>
                    <select
                      name='usertype'
                      id='usertype'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                    >
                      <option value='usertype' selected disabled>
                        Select User Type
                      </option>
                      <option value='admin'>Admin</option>
                      <option value='resident'>Resident</option>
                      <option value='inspector'>Inspector</option>
                    </select>
                  </div>

                  <div>
                    <label className='inline-flex items-center cursor-pointer'>
                      <input
                        id='customCheckLogin'
                        type='checkbox'
                        className='form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150'
                      />
                      <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className='text-center mt-6'>
                    <button
                      className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                      type='button'
                      onClick={handleLogin}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex flex-wrap mt-6 relative'>
              <div className='w-1/2'>
                <Link
                  to='/auth/register'
                  onClick={(e) => e.preventDefault()}
                  className='text-blueGray-200'
                >
                  <small>Forgot password?</small>
                </Link>
              </div>
              <div className='w-1/2 text-right'>
                <Link to='/auth/register' className='text-blueGray-200'>
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
