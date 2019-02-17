import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';

import './App.css';

// setting up client
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjs43zffl1ixr01gfikmzpp5v/master'
})


// testing if our client is connected by runnu=ing query out of react
// client.query({
//   query: testQuery
// })
//   .then(res => console.log(res))




class App extends Component {
  render() {
    return (
      // use ApolloProvider to connected to the client
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header>
              <Link to={'/'}>
                <h1 className='header'>THIS IS GRAPHQL</h1>
              </Link>
            </header>
            <Link to={'/post/new'}>New Post</Link>
            <Switch>
              <Route exact path='/' component={Posts} />
              <Route exact path='/post/new' component={NewPost} />
              <Route path='/post/:id' component={Post} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
