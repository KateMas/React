import React from 'react';

class AdvantagesItem extends React.Component {
    render() {
        return (
            <figure className="advantage">
                <span className={this.props.span}></span>
                <figcaption>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </figcaption>
            </figure>
        )
    }
}

export default AdvantagesItem;