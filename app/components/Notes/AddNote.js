import React from 'react'
import ReactDOM from 'react-dom'

export default class AddNote extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  };

  handleSubmit() {
    var newNote = ReactDOM.findDOMNode(this.refs.note).value;
    ReactDOM.findDOMNode(this.refs.note).value = ''
    this.props.addNote(newNote);
  }
  render() {
    return (
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Add New Note" ref="note" />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
          </span>
        </div>
      )
  }
}