import React, { Component } from 'react'

export default class PostForm extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="title" />
        <textarea type="text" placeholder="body" id="" cols="30" rows="10" />
        <button>Submit</button>
      </form>
    )
  }
}
