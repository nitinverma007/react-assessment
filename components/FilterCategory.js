import React from 'react';
import PropTypes from 'prop-types';

class FilterCategory extends React.PureComponent {
  render() {
    const { filter } = this.props;
    let index = 0;
    return (
      <div className="category-box">
        <h3 className="category-title">{filter.filterName}</h3>
        <ul className="filter-category">
          {
              filter.filterKeys.map((filterKey) => {
                index += 1;
                return (
                  <li key={index}>
                    <label className="custom-radio">
                      <input type="radio" />
                      <span className="icon" />
                      {filterKey.name}
                    </label>
                  </li>
                );
              })
          }
        </ul>
      </div>
    );
  }
}

FilterCategory.propTypes = {
  filter: PropTypes.object.isRequired,
};
export default FilterCategory;
