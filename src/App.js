import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import EventList from './components/EventList/EventList';

class App extends Component {
  render() {
    return (
      <Layout>
        <EventList/>
      </Layout>
    );
  }
}

export default App;
