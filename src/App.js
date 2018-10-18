import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import EventList from './containers/EventList/EventList';
import EventDetails from './containers/EventDetails/EventDetails';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Route, Switch } from 'react-router-dom';

import { faEnvelope, faChevronRight, faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faChevronRight, faChevronLeft, faBars);

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={EventList} />
          <Route path="/event/:date/:id" component={EventDetails} />          
        </Switch>       
      </Layout>
    );
  }
}

export default App;
