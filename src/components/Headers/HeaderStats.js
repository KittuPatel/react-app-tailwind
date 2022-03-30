import React from "react"

// components

import CardStats from "components/Cards/CardStats.js"

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className='relative bg-lightBlue-600 md:pt-32 pb-32 pt-12'>
        <div className='px-4 md:px-10 mx-auto w-full'>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Schools'
                  statTitle='97'
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last year'
                  statIconName='fa fa-school'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Moving Out'
                  statTitle='56'
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last week'
                  statIconName='fas fa-train'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Clinics'
                  statTitle='24'
                  statArrow='up'
                  statPercent='1.10'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last year'
                  statIconName='fa fa-hospital'
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='Residents'
                  statTitle='4,965'
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName='fas fa-users'
                  statIconColor='bg-lightBlue-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
