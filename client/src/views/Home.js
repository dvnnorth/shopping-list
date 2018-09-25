import React, { Component } from 'react';
import AppNavbar from '../components/AppNavbar';
import ShoppingList from '../components/ShoppingList';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavbar />
        <ShoppingList />
      </React.Fragment>
    );
  }
}

export default Home;