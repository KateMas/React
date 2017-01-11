import React from 'react';
import CommentsItem from './CommentsItem';
import CommentsCounter from './CommentsCounter';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class CommentsDisplay extends React.Component {
    constructor () {
        super();
        this.state = {
            isShowComments: true,
            comments: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child('comments'),
            'comments');
    }

    _removeComment(uid){
        if(confirm('Are you sure?')) {
            firebase.database().ref().child('comments').child(uid).remove();
        }
    }

    _toggleComments() {
        this.setState ({
            isShowComments: !this.state.isShowComments
        });
    }
    render () {
        const commentsList = this.state.comments;
        const commentsLength = commentsList.length;

        let commentsListNew;
        let commentsButton;

        if (commentsLength) {
            if(this.state.isShowComments) {
                commentsListNew = <div>
                {
                    commentsList.map((item,i) =>
                        <CommentsItem key={i} uid={item['.key']} remove={this._removeComment} author={item.name} text={item.comment} />)
               }
                </div>
            }
            commentsButton = <button className="visibility-comments" onClick={this._toggleComments.bind(this)}>{this.state.isShowComments ? 'hide' : 'show'} comments</button>
        }
        return (
            <div className="posted-comments">
                <div className="wrapper-counter-comments">
                    <CommentsCounter counter={commentsLength}/>
                    {commentsButton}
                </div>
                {commentsListNew}
            </div>
        )
    }
}

ReactMixin(CommentsDisplay.prototype, ReactFire);

export default CommentsDisplay;