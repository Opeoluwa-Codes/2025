import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import PortfolioPage from './Pages/PortfolioPage'
import ResumePage from './Pages/ResumePage'
import TestimonialPage from './Pages/TestimonialPage'
import TestPage from './Pages/TestPage'
import SideIcons from './Static/SideIcons'
import SidePanel from './Static/SidePanel'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<HomePage/>}/> */}
        </Routes>

        <SideIcons/>
        <Routes>
          <Route path='/' element={<TestPage/>}/>
          {/* <Route path='/about' element={<AboutPage/>}/> */}
          {/* <Route path='/contact' element={<ContactPage/>}/> */}
          {/* <Route path='/portfolio' element={<PortfolioPage/>}/> */}
          {/* <Route path='/resume' element={<ResumePage/>}/> */}
          {/* <Route path='/testimonial' element={<TestimonialPage/>}/> */}
        </Routes>
        <SidePanel/>
      </BrowserRouter>
    </div>    
  );
};

export default App;