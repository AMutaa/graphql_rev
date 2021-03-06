import React, { Component } from 'react'
import PostForm from './PostForm'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';


// create a mutation and pass in a prop of mutation = a query
// mutation createPost which a renderProp returning a form

export default class NewPost extends Component {
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <Mutation mutation={NEW_POST}>
          {createPost => (
            <PostForm onSubmit={createPost} />
          )}
        </Mutation>
      </div>
    )
  }
}


const NEW_POST = gql`
 mutation createPost($title: String!, $body: String! ) {
   createPost(data: {
    status: PUBLISHED
     title: $title
     body:  $body
   }) {
     title
     body
     id
   }
 }
`