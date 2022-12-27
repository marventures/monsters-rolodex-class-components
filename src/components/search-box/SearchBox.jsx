import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <div>
        <input
          type='search'
          onChange={onChangeHandler}
          placeholder={placeholder}
          className={className}
        />
      </div>
    );
  }
}

export default SearchBox;
