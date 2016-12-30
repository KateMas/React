import React from 'react';
import AdvantagesItem from './AdvantagesItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class Advantages extends React.Component {
    constructor() {
        super();
        this.state = {
            advantageslist: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('advantageslist'), "advantageslist");
    }
    render() {
        const AdvantagesList = this.state.advantageslist;
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

ReactMixin(Advantages.prototype, ReactFire);

export default Advantages;