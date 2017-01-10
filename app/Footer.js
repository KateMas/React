import React from 'react';
import Social from './Social';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="wrapper">
                    <div className="wrapper-footer">
                        <div className="item-footer">
                            <a className="logo" href="/" title="logo"></a>
                            <Social/>
                        </div>
                        <div className="item-footer">
                            <h3>Navigation</h3>
                            <nav>
                                <ul className="menu-main">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#about-us">About us</a></li>
                                    <li><a href="#property">Property</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#blog">Our Blog</a></li>
                                    <li><a href="#contacts">Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="item-footer">
                            <h3>For clients</h3>
                            <nav>
                                <ul className="menu-secondary">
                                    <li><a href="#">Sign in</a></li>
                                    <li><a href="#">Forum</a></li>
                                    <li><a href="#">Promotions</a></li>
                                    <li><a href="#">News</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div id="contacts" className="item-footer contacts">
                            <h3>Contact us</h3>
                            <p>240 Central Park, London OR 10019</p>
                            <a href="tel:+1 800 559 6580" title="Freephone">Freephone: +1 800 559 6580</a><br/>
                            <a href="tel:+1 959 603 6035" title="Telephone">Telephone: +1 959 603 6035</a><br/>
                            <a href="fax:+1 800 559 6580" title="FAX">FAX: +1 800 559 6580</a><br/>
                            <a className="mail" href="mailto:info@realhome.com" title="email">info@realhome.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;