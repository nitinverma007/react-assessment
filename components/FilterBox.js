import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterBox extends Component {
  removeFilter(param) {
    const { filtersData, getFilteredData } = param.props;
    filtersData[this] = '';
    getFilteredData();
  }

  render() {
    const { filtersData } = this.props;
    let index = 0;
    return (
      <div className="filtered-items-box clearfix">
        <h2 className="sub-heading">Selected Filters</h2>
        <ul className="filtered-items">
          {
              Object.keys(filtersData).map((filter) => {
                index += 1;
                return !!filtersData[filter] && (
                  <li key={index}>
                    <button type="button" onClick={this.removeFilter.bind(filter, this)} className="filter-btn" title={`Remove filter for ${filter}`}>
                      {filter}
                      {' '}
                      :
                      <span className="filter-value">
                        {' '}
                        {filtersData[filter]}
                      </span>
                    </button>
                  </li>
                );
              })
          }
        </ul>
      </div>
    );
  }
}

FilterBox.propTypes = {
  filtersData: PropTypes.object.isRequired,
};

export default FilterBox;
