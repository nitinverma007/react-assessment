import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import SortBox from './SortBox';

class SearchBar extends React.PureComponent {
  render() {
    const {
      getFilteredData, sortCharacters, filtersData, charactersData,
    } = this.props;

    return (
      <div className="search-bar">
        <SearchBox getFilteredData={getFilteredData} filtersData={filtersData} />
        <SortBox sortCharacters={sortCharacters} charactersData={charactersData} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getFilteredData: PropTypes.func.isRequired,
  sortCharacters: PropTypes.func.isRequired,
  filtersData: PropTypes.object.isRequired,
  charactersData: PropTypes.array,
};

SearchBar.defaultProps = {
  charactersData: [],
};

export default SearchBar;
