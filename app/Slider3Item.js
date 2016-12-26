import React from 'react';

class Slider3Item extends React.Component {
    render() {
        return (
            <div className={this.props.slide}>
                <div className="wrapper-testimonials">
                    <h2 className="title-line title-main"><span>{this.props.name}</span></h2>
                    <p className="text-testimonials">{this.props.text}</p>
                    <p className="author-testimonials">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

export default Slider3Item;