import React, { Component } from 'react';
import PropTypes from 'prop-types';



// create our post form, we submit a function
// function sets state to empty

export default class PostForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object
  }

  static propTypes = {
    post: {}
  }

  state = {
    id: this.props.post.id || '',
    title: this.props.post.title || '',
    body: this.props.post.body || ''
  }

  handleInput = (e) => {
    const formData = {}
    formData[e.target.name] = e.target.value
    this.setState({ ...formData })
  }

  render() {
    const { onSubmit } = this.props
    const { title, body, id } = this.state
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ variables: { title, body, id } })
          .then(
            () => {
              this.setState({
                id,
                title: '',
                body: '',

              })
            }
          ).catch(e => console.log(e))
      }}>
        <input name="title" type="text" onChange={this.handleInput} value={title} placeholder="title" />
        <textarea name="body" type="text" onChange={this.handleInput} value={body} placeholder="body" id="" cols="30" rows="10" />
        <button>Submit</button>
      </form>
    )
  }
}
