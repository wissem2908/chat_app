import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';

import SideBar from "./SideBar";


const isAuthenticated = true

const DashboardLayout = () => {


  if(!isAuthenticated){
    return <Navigate to="/auth/login" />
  }


  return (
    <>
      <Stack direction={"row"}>
       {/**Sidebar */}
       <SideBar/>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
