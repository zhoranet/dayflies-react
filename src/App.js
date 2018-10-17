import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import EventList from './containers/EventList/EventList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faChevronRight, faChevronLeft, faBars);

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
