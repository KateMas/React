import React from 'react';

class PropertyItem extends React.Component {
    render() {
        return (
            <figure>
                <img alt="property" src={this.props.img} />
                <figcaption>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                    <p className="price">{this.props.price}</p>
                    <ul>
                        <li>{this.props.size}</li>
                        <li>{this.props.bedrooms}</li>
                        <li>{this.props.bathrooms}</li>
                    </ul>
                </figcaption>
            </figure>
        )
    }
}

export default PropertyItem;