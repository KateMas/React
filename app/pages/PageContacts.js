import React from 'react';

import Header from './../Header';
import Footer from './../Footer';

class PageContacts extends React.Component {
    render () {
        return (
            <div className = "site">
                <div className="header-placeholder"></div>
                <Header/>
                <section className="page-contacts">
                    <div className="wrapper" id="contacts" className="item-footer contacts">
                        <h3 className="title-main">Contact us</h3>
                        <p className="address">240 Central Park, London OR 10019</p>
                        <a href="tel:+1 800 559 6580" title="Freephone"><b>Freephone</b>: +1 800 559 6580</a><br/>
                        <a href="tel:+1 959 603 6035" title="Telephone"><b>Telephone</b>: +1 959 603 6035</a><br/>
                        <a href="fax:+1 800 559 6580" title="FAX"><b>FAX</b>: +1 800 559 6580</a><br/>
                        <a className="mail" href="mailto:info@realhome.com" title="email">info@realhome.com</a>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default PageContacts;