import React, { Component } from 'react'
import PostForm from './PostForm'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class NewPost extends Component {
  state = {
    title: '',
    body: ''
  }
  handleInput = (e) => {
    const formData = {}
    formData[e.target.name] = e.target.value
    this.setState({ ...formData })
  }
  render() {
    const { title, body } = this.state
    return (
      <div>
        <h1>New Post</h1>
        {/* <PostForm /> */}
        <form>
          <input name="title" type="text" onChange={this.handleInput} value={title} placeholder="title" />
          <textarea name="body" type="text" onChange={this.handleInput} value={body} placeholder="body" id="" cols="30" rows="10" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
