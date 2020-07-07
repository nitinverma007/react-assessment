import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterBox from './FilterBox';
import SearchBar from './SearchBar';
import CharactersList from './CharactersList';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.sortCharacters = this.sortCharacters.bind(this);
  }

  sortCharacters() {
    const { MainContentData } = this.props;
    MainContentData.results = MainContentData.results.reverse();
    this.forceUpdate();
  }

  render() {
    const { MainContentData, getFilteredData, filtersData } = this.props;
    return (
      <div className="content">
        <FilterBox getFilteredData={getFilteredData} filtersData={filtersData} />
        <SearchBar
          getFilteredData={getFilteredData}
          filtersData={filtersData}
          sortCharacters={this.sortCharacters}
          charactersData={MainContentData.results}
        />
        {
          MainContentData && MainContentData.results
          && <CharactersList charactersData={Array.from(MainContentData.results)} />
          }
      </div>
    );
  }
}

MainContent.propTypes = {
  MainContentData: PropTypes.object.isRequired,
  getFilteredData: PropTypes.func.isRequired,
  filtersData: PropTypes.object.isRequired,
};

export default MainContent;
