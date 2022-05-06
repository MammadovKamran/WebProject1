import React from "react";
import Contact from "./Contact";
import ContactHeaderDash from "./ContactHeaderDash";
import Footer from "./../../footer/Footer";
import ParticlesBg from 'particles-bg';

const ContactDashboard = () => {
    return (
        <div>
            <ParticlesBg type={"tadpole"} bg={true} color={"#123499"} />
            <ContactHeaderDash/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default ContactDashboard;