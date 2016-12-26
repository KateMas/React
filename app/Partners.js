import React from 'react';

class Partners extends React.Component {
    render() {
        return (
            <section className="partners">
                <div className="wrapper">
                    <ul className="wrapper-partners">
                        <li>Our <span>Partners</span></li>
                        <li className="tech-start">
                            <a href="#">
                                <img src="images/partners/tech-start.png" alt="partners"/>
                            </a>
                        </li>
                        <li className="swan">
                            <a href="#">
                                <img src="images/partners/swan.png" alt="partners"/>
                            </a>
                        </li>
                        <li className="audio-pro">
                            <a href="#">
                                <img src="images/partners/audio-pro.png" alt="partners"/>
                            </a>
                        </li>
                        <li className="strongwave">
                            <a href="#">
                                <img src="images/partners/strongwave.png" alt="partners"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Partners;