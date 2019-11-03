import React, { Component } from 'react';
import Header from './components/header/';
import { renderRoutes } from 'react-router-config';

class App extends Component {
  render() {
    const { route, staticContext } = this.props;
    // console.log('props', this.props)
    return (
      <div>
        <Header staticContext={staticContext}/>
        {
          renderRoutes(route.routes)
        }
      </div>
    );
  }
}

export default App;