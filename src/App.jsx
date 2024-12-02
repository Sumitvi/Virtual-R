import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Team from './components/Team'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Technical from "./pages/Technical.jsx"
import Design from "./pages/Design.jsx"
import Event from "./pages/Event.jsx"
import Marketing from "./pages/Marketing.jsx"
import Operational from "./pages/Operational.jsx"
import Outreach from "./pages/Outreach.jsx"
import PRContent from "./pages/PRContent.jsx"
import FooterForMobile from './components/FooterForMobile.jsx';


const MainPage = () => {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      <AboutUs />
      <Team />
      <ContactUs />
      <Footer />
      <FooterForMobile/>
    </>
  );
};

const App = () => {
  return (


    <Router>

    <NavBar/>
    <Routes>

              {/* Main page with all components */}
        <Route path="/" element={<MainPage />} />

        {/* Other pages */}

        <Route path="/technical-team" element={<Technical />} />
        <Route path="/design-team" element={<Design />} />
        <Route path="/event-team" element={<Event />} />
        <Route path="/marketing-team" element={<Marketing />} />
        <Route path="/operational-team" element={<Operational />} />
        <Route path="/outreach-team" element={<Outreach />} />
        <Route path="/content-team" element={<PRContent />} />
    </Routes>
    </Router>


  );
};

export default App;
