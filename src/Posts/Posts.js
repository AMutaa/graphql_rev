import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

// Use a Query Component, and render prop to return some data

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Link className='button' to={'/post/new'}>New Post</Link>
        <ol className='posts'>
          <Query query={POSTS_QUERY}>
            {({ loading, data, fetchMore }) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return (
                <Fragment>
                  {posts.map(post => (
                    <li key={post.id} >
                      <Link to={`/post/${post.id}`}>
                        <h1>{post.title}</h1>
                      </Link>
                    </li>
                  ))}
                  <li><button className='button' onClick={fetchMore}>Load More</button></li>
                </Fragment>
              )

            }}

          </Query>
        </ol>
      </div>

    )
  }
}


// writing the first query
// adjusted query with sorting and pagination
const POSTS_QUERY = gql`
 query allPosts{
  posts(orderBy: createdAt_DESC, first: 3)  {
    id
    title
    body
 }
}
 `