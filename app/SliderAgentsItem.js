import React from 'react';

class SliderAgentsItem extends React.Component {
    render() {
        return (
            <div className={this.props.slide}>
                <figure>
                    <img src={this.props.img} alt="agents"/>
                    <figcaption>
                        <h2 className="title-line title-main">{this.props.title} <span>{this.props.titlebold}</span></h2>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.text}</p>
                        <ul>
                            <li>
                                <a href={this.props.tel}>{this.props.tel}</a>
                            </li>
                            <li>
                                <a href={this.props.email}>{this.props.email}</a>
                            </li>
                        </ul>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default SliderAgentsItem;