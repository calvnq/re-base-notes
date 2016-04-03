import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router'

export default class SearchGithub extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    this.refs.username.value = '';
    this.context.router.push(`/profile/${username}`);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}