import React from 'react';
import Slider3Item from './Slider3Item';

class Slider3 extends React.Component {
    render() {
        const Slider3List = [
            {
                slide: "slider--1",
                name: "Testimonials",
                description: "Liber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem.",
                author: 'Amanda Seyfried, Apple'
            },
            {
                slide: "slider--2",
                name: "Testimonials",
                description: "Liber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem.",
                author: 'Amanda Seyfried, Apple'
            },
            {
                slide: "slider--3",
                name: "Testimonials",
                description: "Liber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem.",
                author: 'Amanda Seyfried, Apple'
            }
        ];
        return (
            <section className="slider3">
                <div className="owl-carousel">
                    {
                        Slider3List.map((item,i) =>
                            <Slider3Item key={i} slide={item.slide} name={item.name} text={item.description} author={item.author}/>)
                   }
                </div>
            </section>
        )
    }
}

export default Slider3;