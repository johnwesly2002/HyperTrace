import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage/AboutPage'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/footer/Footer'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import ShortenUrlPage from './components/ShortenUrlPage/ShortenUrlPage'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import ErrorPage from './components/ErrorPage/ErrorPage'
const AppRouter = () => {
  return (
    <>
        <NavBar />
        <Toaster position='top-center' />
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>}></Route>
          <Route path='/login' element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>}></Route>
          <Route path='/dashboard' element={<PrivateRoute publicPage={false}><DashboardLayout /> </PrivateRoute>}></Route>
          <Route path='/error' element={<ErrorPage message={"Oops Error Occured"} />}></Route>
          <Route path='*' element={<ErrorPage message={"We can't seem to find the page you're looking for"} />}></Route>

        </Routes>
        <Footer />
    </>
  )
}

export default AppRouter;

export const SubDomainRouter = () => {
    return(
        <Routes>
            <Route path='/:url' element = {<ShortenUrlPage />}></Route>
        </Routes>
    );
}
