import React from 'react';
import PropertyItem from './../PropertyItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

import Header from './../Header';
import Footer from './../Footer';

class PageProperty extends React.Component {
    constructor() {
        super();
        this.state = {
            propertylist: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('propertylist'), "propertylist");
    }
    render() {
        const PropertyList = this.state.propertylist;
        return (
            <div className = "site">
                <div className="header-placeholder"></div>
                <Header/>
                <section id="property" className="property">
                    <div className="wrapper">
                        <h2 className="title-line title-main">Featured <span>Properties</span></h2>
                        <p className="under-title">Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
                        <div className="example">
                            {
                                PropertyList.map((item,i) =>
                                    <PropertyItem key={i} img={item.img} title={item.title} text={item.description} price={item.price} size={item.size} bedrooms={item.bedrooms} bathrooms={item.bathrooms}/>)
                            }
                        </div>
                        <button className="btn">all properties</button>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

ReactMixin(PageProperty.prototype, ReactFire);

export default PageProperty;