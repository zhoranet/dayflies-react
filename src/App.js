import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import EventList from './components/EventList/EventList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faAngleLeft, faAngleRight, faBars);

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
