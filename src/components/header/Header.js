import React from "react";
import './header.css';
import CTA from './CTA';
import ME from '../../assets/Ameer-13.png';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>Muhammad Ameer</h1>
                <h5 className="text-light">FullStack Web and Mobile Application Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="My Personal Pic"/>
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>


        </header>
    );
};

export default Header;
