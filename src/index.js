import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// Local State with Apollo Link State
const defaultState = {
  isEditMode: false
}

// create cache with inMemory storage
const cache = new InMemoryCache();

persistCache({
  cache,
  storage: window.localStorage
}).then(() => {

  // setting up client, connecting our site to GraphQL API
  const client = new ApolloClient({
    cache,
    uri: 'https://api-useast.graphcms.com/v1/cjs43zffl1ixr01gfikmzpp5v/master',
    clientState: {
      defaults: defaultState,
      resolvers: {}
    }
  })


  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    , document.getElementById('root'));
  serviceWorker.unregister();

})