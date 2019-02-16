import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag'
import logo from './logo.svg';
import './App.css';

// setting up client
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjs43zffl1ixr01gfikmzpp5v/master'
})

// writing the first query
const testQuery = gql`
{
  posts {
   id
   title
   body
  }
 }
`
// testing if our client is connected
client.query({
  query: testQuery
})
  .then(res => console.log(res))



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
