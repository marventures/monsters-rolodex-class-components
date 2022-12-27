import React, { Component } from 'react';
import './search-box.styles.css';
export class SearchBox extends Component {
  render() {
    const { onChangeHandler } = this.props;
    return (
      <div>
        <input
          type='search'
          onChange={onChangeHandler}
          placeholder='Search monsters'
          className='search-box'
        />
      </div>
    );
  }
}

export default SearchBox;
