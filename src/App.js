import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
import './App.css';



// testing if our client is connected by runnu=ing query out of react
// client.query({
//   query: testQuery
// })
//   .then(res => console.log(res))




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Link to={'/'}>
              <h1 className='header'>THIS IS GRAPHQL</h1>
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path='/' component={Posts} />
              <Route exact path='/post/new' component={NewPost} />
              <Route path='/post/:id' component={Post} />
            </Switch>
          </main>
        </div>
      </Router>

    );
  }
}

export default App;
