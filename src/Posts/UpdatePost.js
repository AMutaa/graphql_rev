import React, { Component } from 'react';
import PostForm from './PostForm';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

// update Post mutation

export default class UpdatePost extends Component {
  render() {
    const { post } = this.props;
    return (
      <Mutation mutation={UPDATE_POST}>
        {updatePost => (
          <PostForm post={post} onSubmit={updatePost} />
        )}
      </Mutation>
    )
  }
}



const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(
    where: {id: $id}
    data: {
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