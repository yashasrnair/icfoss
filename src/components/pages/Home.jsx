import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import About from '../About';
import Mission from '../Mission'
// import Team from "../team"
// import Members from '../Members'


function Home() {
return (
    <>
    <HeroSection />
    <About />
    <Mission />
    {/* <Team /> */}
    <Cards />
    {/* <Members /> */}
    </>
);
}

export default Home;