import React from 'react';
import AdvantagesItem from './AdvantagesItem';

class Advantages extends React.Component {
    render() {
        const AdvantagesList = [
            {
                span: 'icon-style icon-earth',
                title: 'Whole World',
                description: 'Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.'
            },
            {
                span: 'icon-style icon-briefcase',
                title: 'Confidentially',
                description: 'Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.'
            },
            {
                span: 'icon-style icon-photos',
                title: 'Good Previews',
                description: 'Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.'
            },
            {
                span: 'icon-style icon-file-drawer',
                title: 'Confidentially',
                description: 'Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.'
            }
        ];
        return (
            <section className="advantages">
                <div className="wrapper">
                    <div className="wrapper-advantages">
                        {
                            AdvantagesList.map((item,i) =>
                                <AdvantagesItem key={i} span={item.span} title={item.title} text={item.description} />)
                       }
                    </div>
                </div>
            </section>
        )
    }
}

export default Advantages;