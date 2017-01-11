import React from 'react';
import firebase from 'firebase';

class CommentsForm extends React.Component {
    _submitForm(event) {
        event.preventDefault();

        const author = this.refs.author.value;
        const comment = this._comment.value;

        if (!(author.length && comment.length)) {
            return;
        }
        const commentObj = {
            "name": author,
            "comment": comment
        }
        firebase.database().ref().child('comments').push(commentObj).then( () =>
            this.refs.author.value = "",
            this._comment.value = ""
        )
    }
	render () {
		return (
			<form onSubmit={this._submitForm.bind(this)}>
                <input ref="author" type="text" placeholder="Name" />
                <textarea ref={(textarea) => this._comment = textarea} placeholder="Comments"></textarea>
                <button>post comment</button>
            </form>
		)
	}
}

export default CommentsForm;