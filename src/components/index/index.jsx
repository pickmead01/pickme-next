import React from "react";
import About from '@components/index/about';
import OurService from '@components/index/ourService';
import ContactUs from '@components/index/contactUs';
import Partners from '@components/index/partners';

export default function Page() {
    return <>
        <About />
        <OurService />
        <Partners />
        <ContactUs />
    </>;
}
