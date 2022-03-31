import React from "react"
import { Switch, Route, Redirect, useLocation } from "react-router-dom"

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js"
import Sidebar from "components/Sidebar/Sidebar.js"
import HeaderStats from "components/Headers/HeaderStats.js"
import FooterAdmin from "components/Footers/FooterAdmin.js"

// views

import Tickets from "views/resident/Tickets.js"
import Events from "views/resident/Events.js"
import School from "views/resident/School.js"
import Business from "views/resident/Business.js"
import Discount from "views/resident/Discount.js"
import Chats from "views/resident/Chats.js"

export default function Resident() {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64'>
        {pathName.includes("/resident/dashboard") && <AdminNavbar />}
        {/* Header */}
        {pathName.includes("/resident/dashboard") && <HeaderStats />}
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Switch>
            {/* <Route path='/resident/dashboard' exact component={Dashboard} />
            <Route path='/resident/settings' exact component={Settings} /> */}
            <Route path='/resident/school' exact component={School} />
            <Route path='/resident/events' exact component={Events} />
            <Route path='/resident/tickets' exact component={Tickets} />
            <Route path='/resident/business' exact component={Business} />
            <Route path='/resident/discount' exact component={Discount} />
            <Route path='/resident/chats' exact component={Chats} />
            <Redirect from='/resident' to='/resident/school' />
          </Switch>
        </div>
      </div>
    </>
  )
}
