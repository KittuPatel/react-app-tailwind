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
                About Us
              </h2>
              <p className='mt-4 text-lg leading-relaxed text-blueGray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deleniti accusamus, molestiae suscipit amet nulla ab odit consectetur, voluptate ratione sequi! Quasi accusantium possimus ipsam suscipit cupiditate iusto. Nam, impedit!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, deleniti accusamus, molestiae suscipit amet nulla ab odit consectetur, voluptate ratione sequi! Quasi accusantium possimus ipsam suscipit cupiditate iusto. Nam, impedit!
              </p>
              
            </div>
          </div>
        </div>

        <img
          className='absolute top-20 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px'
          src='https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='...'
        />
      </section>

      <Footer />
    </>
  )
}
