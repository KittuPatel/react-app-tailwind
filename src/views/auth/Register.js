import React from "react"
import { Link, useHistory } from "react-router-dom"


export default function Register() {
  const history = useHistory();
  const signUp = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value;
    const user_type = "RESIDENT";
    if(name?.length > 0 && email?.length > 0 && password?.length > 0 && phone?.length > 0 && dob?.length > 0 && address?.length > 0){
      let userInfo = {
        name,
        email,
        password,
        phone,
        dob,
        address,
        user_type
      }
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
      };
      fetch("http://localhost/rahul/siremar/public/api/signup",
        requestOptions)
        .then(response => response.json())
        .then((data) => {
          data = data;
          
          console.log(data.errors);
          if(data.status){
            alert(data.status);
            history.push("/auth/login");
          }
          
          if(Object.keys(data.errors).length > 0){
            Object.keys(data.errors).forEach(key => {
              document.getElementById(`${key}-error`).innerHTML = data.errors[key][0];
            });
          }
        });
      }else{
        alert("Please fill all the fields");
      }
    }


  return (
    <>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-6/12 px-4'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-blueGray-500 text-sm font-bold'>
                    Sign up with
                  </h6>
                </div>
              </div>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <form>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Name
                    </label>
                    <input
                      type='name'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Name'
                      id='name'
                    />
                    <span id="name-error" style={{"color": "red"}}></span>
                  </div>

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
                    <span id="email-error" style={{"color": "red"}}></span>
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
                    <span id="password-error" style={{"color": "red"}}></span>
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Address
                    </label>
                    <input
                      type='text'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Address'
                      id='address'
                    />
                    <span id="address-error" style={{"color": "red"}}></span>
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Phone 
                    </label>
                    <input
                      type='number'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Phone No.'
                      id='phone'
                    />
                    <span id="phone-error" style={{"color": "red"}}></span>
                  </div>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Date of Birth 
                    </label>
                    <input
                      type='date'
                      className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      id="dob"
                    />
                    <span id="dob-error" style={{"color": "red"}}></span>
                  </div>
                  <div>
                    <label className='inline-flex items-center cursor-pointer'>
                      <span className='ml-2 text-sm font-semibold text-blueGray-600'>
                        By clicking on the <b>Create Account</b> you accept our{" "}
                        <a
                          href='#pablo'
                          className='text-lightBlue-500'
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className='text-center mt-6'>
                    <button
                      className='bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
                      type='button'
                      onClick={signUp}
                      id="signupButton"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}
