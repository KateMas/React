import React from 'react';
import Social from './Social';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper ws-wrapper">
                    <a className="logo" href="/" title="logo"></a>
                    <a className="navtoggle js-navtoggle">
                        <span className="l1"></span>
                        <span className="l2"></span>
                        <span className="l3"></span>
                    </a>
                    <nav>
                        <ul className="navigation js-navigation">
                            <li><a href="/">Home</a></li>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#property">Property</a></li>
                            <li><a href="#blog">Our Blog</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </ul>
                    </nav>
                    <Social/>
                </div>
            </header>
        )
    }
}

export default Header;