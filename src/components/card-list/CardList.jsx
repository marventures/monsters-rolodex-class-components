import React, { Component } from 'react';
import './card-list.styles.css';
export class CardList extends Component {
  render() {
    console.log('render from CardList');
    const { filteredMonsters } = this.props;

    return (
      <div className='card-list'>
        {filteredMonsters.map(monster => {
          const { id, name, email } = monster;
          return (
            <div className='card-container' key={id}>
              <img
                alt={`Monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
