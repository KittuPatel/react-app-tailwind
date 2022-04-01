import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "assets/styles/tailwind.css"

// layouts

import Admin from "layouts/Admin.js"
import Auth from "layouts/Auth.js"
import Resident from "layouts/Resident.js"
import Inspector from "layouts/Inspector.js"

// views without layouts

import Landing from "views/Landing.js"
import Profile from "views/Profile.js"
import Index from "views/Index.js"
import AboutUs from "views/Aboutus.js"
import ContactUs from "views/Contactus.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path='/admin' component={Admin} />
      <Route path='/resident' component={Resident} />
      <Route path='/inspector' component={Inspector} />
      <Route path='/auth' component={Auth} />
      {/* add routes without layouts */}
      <Route path='/landing' exact component={Landing} />
      <Route path='/about-us' exact component={AboutUs} />
      <Route path='/contact-us' exact component={ContactUs} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/' exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
)
