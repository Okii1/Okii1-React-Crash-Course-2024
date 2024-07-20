import React from 'react'
import {Outlet} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';


const MainLayout = () => {
  return (  
  <>
  <Navbar />
  <Outlet />
  <ToastContainer/>
  </>
  );
};

export default MainLayout;