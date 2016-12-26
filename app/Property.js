import React from 'react';
import PropertyItem from './PropertyItem';

class Property extends React.Component {
    render() {
        const PropertyList = [
            {
                img: 'images/features/image1.jpg',
                title: '1450 Cloudcroft Drop',
                description: 'Illinois / Chicago',
                price: '$250,000',
                size: '3400 Sq Ft',
                bedrooms: '2 Bedrooms',
                bathrooms: '1 Bathroom'
            },
            {
                img: 'images/features/image2.jpg',
                title: '140 Small Village',
                description: 'Missouri / Kansas City',
                price: '$200,000',
                size: '3400 Sq Ft',
                bedrooms: '2 Bedrooms',
                bathrooms: '1 Bathroom'
            },
            {
                img: 'images/features/image3.jpg',
                title: '1250 Lake House',
                description: 'Colorado / Denver',
                price: '$339,000',
                size: '3400 Sq Ft',
                bedrooms: '2 Bedrooms',
                bathrooms: '1 Bathroom'
            },
            {
                img: 'images/features/image4.jpg',
                title: '1450 Cloudcroft Drop',
                description: 'Illinois / Chicago',
                price: '$250,000',
                size: '3400 Sq Ft',
                bedrooms: '2 Bedrooms',
                bathrooms: '1 Bathroom'
            },
            {
                img: 'images/features/image5.jpg',
                title: '140 Small Village',
                description: 'Missouri / Kansas City',
                price: '$200,000',
                size: '3400 Sq Ft',
                bedrooms: '2 Bedrooms',
                bathrooms: '1 Bathroom'
            },
            {
                img: 'images/features/image6.jpg',
                title: '1250 Lake House',
                description: 'Colorado / Denver',
                price: '$339,000',
                size: '3400 Sq Ft',
                bedrooms: '2 Bedrooms',
                bathrooms: '1 Bathroom'
            }
        ];
        return (
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
        )
    }
}

export default Property;