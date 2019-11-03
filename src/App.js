import React, { Component } from 'react';
import Header from './components/header';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    const { route } = this.props;
    // console.log('props', this.props)
    return (
      <div>
        <Header />
        {
          renderRoutes(route.routes)
        }
      </div>
    );
  }
}

export default App;