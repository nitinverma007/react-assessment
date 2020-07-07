import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.keywordRef = React.createRef();
    this.setSearchKeywordValue = this.setSearchKeywordValue.bind(this);
  }

  setSearchKeywordValue(event) {
    event.preventDefault();
    const { filtersData, getFilteredData } = this.props;
    const keyword = this.keywordRef.valueOf().current.value;
    filtersData.name = keyword;
    this.keywordRef.valueOf().current.value = '';
    getFilteredData();
  }

  render() {
    return (
      <div className="search-wrap">
        <h3 className="form-legend">Search By name</h3>
        <form className="search-box" onSubmit={this.setSearchKeywordValue}>
          <input ref={this.keywordRef} type="search" />
          <button type="button">Search</button>
        </form>
      </div>
    );
  }
}

SearchBox.propTypes = {
  filtersData: PropTypes.object.isRequired,
  getFilteredData: PropTypes.func.isRequired,

};

export default SearchBox;
