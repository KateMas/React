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
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCvMw9AkHkQ5Gy2BkPpP29StMKi2doCq6M",
    authDomain: "realhome-302a1.firebaseapp.com",
    databaseURL: "https://realhome-302a1.firebaseio.com",
    storageBucket: "realhome-302a1.appspot.com",
    messagingSenderId: "86285208570"
};

firebase.initializeApp(config);

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