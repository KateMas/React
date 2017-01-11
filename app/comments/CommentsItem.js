import React from 'react';
import firebase from 'firebase';

class CommentsItem extends React.Component {
    render () {
        return (
            <div className="comment">
                <button onClick={this.props.remove.bind(this, this.props.uid)}>Delete</button>
                <h3>{this.props.author}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default CommentsItem;