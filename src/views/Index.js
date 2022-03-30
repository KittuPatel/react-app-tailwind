/*eslint-disable*/
import React from "react"
import { Link } from "react-router-dom"

import IndexNavbar from "components/Navbars/IndexNavbar.js"
import Footer from "components/Footers/Footer.js"

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
        <div className='container mx-auto items-center flex flex-wrap'>
          <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
            <div className='pt-32 sm:pt-0'>
              <h2 className='font-semibold text-4xl text-blueGray-600'>
                Good vibes happen on the tides.
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                We help you live in beautiful island.
              </p>
              <div className='mt-12'>
                <Link
                  to='/auth/register'
                  target='_blank'
                  className='get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          className='absolute top-20 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px'
          src='https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
          alt='...'
        />
      </section>

      <section className='mt-48 md:mt-40 pb-40 relative bg-blueGray-100'>
        <div
          className='-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20'
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-blueGray-100 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
              <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500'>
                <img
                  alt='...'
                  src='https://ychef.files.bbci.co.uk/976x549/p0bbj82q.jpg'
                  className='w-full align-middle rounded-t-lg'
                />
                <blockquote className='relative p-8 mb-4'>
                  <svg
                    preserveAspectRatio='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 583 95'
                    className='absolute left-0 w-full block h-95-px -top-94-px'
                  >
                    <polygon
                      points='-30,95 583,95 583,65'
                      className='text-lightBlue-500 fill-current'
                    ></polygon>
                  </svg>
                  <h4 className='text-xl font-bold text-white'>Benefits</h4>
                  <p className='text-md font-light mt-2 text-white'>
                    Discounts in different fields. Citizens of Island gets
                    discounts in different fields like tickets, clinic, schools,
                    business, events etc.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className='w-full md:w-6/12 px-4'>
              <div className='flex flex-wrap'>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-sitemap'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        CSS Components
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-drafting-compass'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        JavaScript Components
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-6/12 px-4'>
                  <div className='relative flex flex-col min-w-0 mt-4'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-newspaper'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>Pages</h6>
                      <p className='mb-4 text-blueGray-500'>
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex flex-col min-w-0'>
                    <div className='px-4 py-5 flex-auto'>
                      <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                        <i className='fas fa-file-alt'></i>
                      </div>
                      <h6 className='text-xl mb-1 font-semibold'>
                        Documentation
                      </h6>
                      <p className='mb-4 text-blueGray-500'>
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 pb-32 pt-48'>
          <div className='items-center flex flex-wrap'>
            <div className='w-full md:w-5/12 ml-auto px-12 md:px-4'>
              <div className='md:pr-12'>
                <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white'>
                  <i className='fas fa-file-alt text-xl'></i>
                </div>
                <h3 className='text-3xl font-semibold'>
                  Complex Documentation
                </h3>
                <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
              </div>
            </div>

            <div className='w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0'>
              <img
                alt='...'
                className='max-w-full rounded-lg shadow-xl'
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src='https://images.unsplash.com/photo-1553603227-2358aabe821e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80'
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
