import React from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Auth from '../../components/auth/Auth'

function Landing() {
  return (
    <Auth/>
  )
}

export default Landing