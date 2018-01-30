import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Content from './components/content';
import Meeting from './components/meeting';

import './App.css';

import Layout from './components/layout';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache()
});

const Main = (props) => (
  <Layout>
    <Content />
  </Layout>
);

const MeetingComponent = (props) => {
  console.log(props.location.state)
  return (
    <Layout noCreateBtn >
      <Meeting {...props.location.state} />
    </Layout>
  )
};

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/create" component={MeetingComponent} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
