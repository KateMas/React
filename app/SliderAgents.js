import React from 'react';
import SliderAgentsItem from './SliderAgentsItem';

class SliderAgents extends React.Component {
    render() {
        const SliderAgentsList = [
            {
                slide: 'slider--1',
                img: 'images/agents/agent2.jpg',
                title: 'Our',
                titlebold: 'Agents',
                name: 'Lisa Gerrard',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi.',
                tel: '+ 7 (123) 456-78-99',
                email: 'lisa.gerrard@realhome.com'
            },
            {
                slide: 'slider--2',
                img: 'images/agents/agent1.jpg',
                title: 'Our',
                titlebold: 'Agents',
                name: 'Lisa Gerrard',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi.',
                tel: '+ 7 (123) 456-78-99',
                email: 'lisa.gerrard@realhome.com'
            },
            {
                slide: 'slider--3',
                img: 'images/agents/agent2.jpg',
                title: 'Our',
                titlebold: 'Agents',
                name: 'Tom Gerrard',
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, raesent luptatum zzril delenit augue duis dolore te feugait nulla nonummy nibh euismod tincidunt facilisi.',
                tel: '+ 7 (123) 456-78-99',
                email: 'lisa.gerrard@realhome.com'
            }
        ];
        return (
            <section className="slider-agents">
                <div className="wrapper">
                    <div className="owl-carousel">
                            {
                                SliderAgentsList.map((item,i) =>
                                    <SliderAgentsItem key={i} slide={item.slide} img={item.img} title={item.title} titlebold={item.titlebold} name={item.name} text={item.description} tel={item.tel} email={item.email} />)
                           }
                    </div>
                </div>
            </section>
        )
    }
}

export default SliderAgents;