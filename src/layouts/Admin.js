import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js"
import Sidebar from "components/Sidebar/Sidebar.js"
import HeaderStats from "components/Headers/HeaderStats.js"
import FooterAdmin from "components/Footers/FooterAdmin.js"
import { Link, useLocation } from "react-router-dom"
// views

import Dashboard from "views/admin/Dashboard.js"

import Settings from "views/admin/Settings.js"
import Residents from "views/admin/Residents.js"
import Counties from "views/admin/Counties.js"
import Schools from "views/admin/Schools.js"
import Business from "views/admin/Business.js"
import Inspectors from "views/admin/Inspectors.js"
import Chats from "views/admin/Chats.js"

export default function Admin() {
  const location = useLocation()
  const pathName = location.pathname
  console.log(pathName)

  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64'>
        {pathName.includes("/admin/dashboard") && <AdminNavbar />}
        {/* Header */}
        {pathName.includes("/admin/dashboard") && <HeaderStats />}
        {/* <HeaderStats /> */}
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Switch>
            <Route path='/admin/dashboard' exact component={Dashboard} />
            {/* <Route path='/admin/settings' exact component={Settings} /> */}
            <Route path='/admin/residents' exact component={Residents} />
            <Route path='/admin/counties' exact component={Counties} />
            <Route path='/admin/schools' exact component={Schools} />
            <Route path='/admin/business' exact component={Business} />
            <Route path='/admin/inspectors' exact component={Inspectors} />
            <Route path='/admin/chats' exact component={Chats} />
            <Redirect from='/admin' to='/admin/dashboard' />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  )
}
