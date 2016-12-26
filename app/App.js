import React from 'react';
import ReactDom from 'react-dom';

import Header from './Header';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Advantages from './Advantages';
import Property from './Property';
import SliderAgents from './SliderAgents';
import More from './More';
import Slider3 from './Slider3';
import Partners from './Partners';
import Footer from './Footer';

class Site extends React.Component {
    render() {
        return (
            <div className = "site">
                <Header/>
                <Slider/>
                <AboutUs/>
                <Advantages/>
                <Property/>
                <SliderAgents/>
                <More/>
                <Slider3/>
                <Partners/>
                <Footer/>
            </div>
        )
    }
}

ReactDom.render(
    <Site/>,
    document.getElementById('app')
)