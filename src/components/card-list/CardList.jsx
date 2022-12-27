import React, { Component } from 'react';

export class CardList extends Component {
  render() {
    console.log('render from CardList');
    const { filteredMonsters } = this.props;

    return (
      <div>
        {filteredMonsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
