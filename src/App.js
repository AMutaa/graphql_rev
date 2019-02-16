import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag'

import './App.css';

// setting up client
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjs43zffl1ixr01gfikmzpp5v/master'
})

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

// testing if our client is connected by runnu=ing query out of react
// client.query({
//   query: testQuery
// })
//   .then(res => console.log(res))



// Use a Query Component, and render prop to return some data

class App extends Component {
  render() {
    return (
      // use ApolloProvider to connected to the client
      <ApolloProvider client={client}>
        <div className="App">
          <Query query={POSTS_QUERY}>
            {({ loading, data }) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return posts.map(post => <h1>{post.title}</h1>)
            }}

          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
