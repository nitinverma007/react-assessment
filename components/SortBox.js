import React from 'react';
import PropTypes from 'prop-types';

class SortBox extends React.PureComponent {
  render() {
    const { sortCharacters } = this.props;
    return (
      <div className="sort-box">
        <select onChange={sortCharacters}>
          <option value="ascending">Ascending</option>
          <option value="decending">Decending</option>
        </select>
      </div>
    );
  }
}

SortBox.propTypes = {
  sortCharacters: PropTypes.func.isRequired,
};

export default SortBox;
