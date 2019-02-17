import React, { Component } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';



// Use a Query Component, and render prop to return some data

export default class Posts extends Component {
  render() {
    return (
      <Query query={POSTS_QUERY}>
        {({ loading, data }) => {
          if (loading) return 'Loading...';
          const { posts } = data;
          return posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
          ));
        }}

      </Query>
    )
  }
}


// writing the first query
const POSTS_QUERY = gql`
 query allPosts{
   posts {
    id
    title
    body
   }
 }
 `