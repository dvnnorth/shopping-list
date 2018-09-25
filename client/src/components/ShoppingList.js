import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Pancake Batter' },
      { id: uuid(), name: 'Chicken' },
      { id: uuid(), name: 'Bread' }]
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item:');
            if (name) {
              this.setState({
                items: [...this.state.items, { id: uuid(), name }]
              });
            }
          }}>
          Add Item
        </Button>
        <ul>
          {this.state.items.map(item => (<li key={uuid()}>{item.name}</li>))}
        </ul>
      </Container>
    );
  }
}

export default ShoppingList;