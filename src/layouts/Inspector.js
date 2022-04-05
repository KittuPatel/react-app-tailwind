import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js"
import Sidebar from "components/Sidebar/Sidebar.js"
import HeaderStats from "components/Headers/HeaderStats.js"
import FooterAdmin from "components/Footers/FooterAdmin.js"
import { Link, useLocation } from "react-router-dom"
// views
import Dashboard from "views/inspector/Dashboard"
import Events from "views/inspector/Events.js"
import Schools from "views/inspector/Schools.js"
import Business from "views/inspector/Business.js"
import Discount from "views/inspector/Discount.js"
import Chats from "views/inspector/Chats.js"
import Residents from "views/inspector/Residents"
import Moveouts from "views/inspector/Moveouts"
import Profile from "views/inspector/Profile"

export default function Inspector() {
  const location = useLocation()
  const pathName = location.pathname
  console.log(pathName)
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64'>
        {pathName.includes("/inspector/dashboard") && <AdminNavbar />}
        {/* Header */}
        {pathName.includes("/inspector/dashboard") && <HeaderStats />}
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Switch>
            <Route path='/inspector/profile' exact component={Profile} />
            <Route path='/inspector/dashboard' exact component={Dashboard} />
            <Route path='/inspector/residents' exact component={Residents} />
            <Route path='/inspector/schools' exact component={Schools} />
            <Route path='/inspector/moveouts' exact component={Moveouts} />
            <Route path='/inspector/events' exact component={Events} />
            <Route path='/inspector/discount' exact component={Discount} />
            <Route path='/inspector/business' exact component={Business} />
            <Route path='/inspector/chats' exact component={Chats} />
            <Redirect from='/inspector' to='/inspector/school' />
          </Switch>
        </div>
      </div>
    </>
  )
}
