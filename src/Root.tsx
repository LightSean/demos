import React, { Fragment } from 'react';
import './App.scss'
import { Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { CustomNavBar } from './NavBar';
function Root() {
  return (
    <Fragment>
        <CustomNavBar></CustomNavBar>
        <Outlet/>
    </Fragment>
  );
}

export default Root;
