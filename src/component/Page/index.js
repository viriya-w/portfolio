import React, { useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Home from '../Home/Home';
import About from '../About/about';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Page = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />   
            
            <Navbar toggle={toggle} />

            <Home />

            <About />

            <Resume />

            <Contact />

            <Footer />

        </>
    );
};

export default Page
