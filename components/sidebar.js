import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleOriginChange = this.handleOriginChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);

    this.state = {
      filtersOpened: true,
    };

    this.handleFiltersAccordion = this.handleFiltersAccordion.bind(this);
  }

  handleGenderChange(event) {
    const { filtersData, getFilteredData } = this.props;
    filtersData.gender = event.target.value;
    getFilteredData();
  }

  handleOriginChange(event) {
    const { filtersData, getFilteredData } = this.props;
    filtersData.origin = event.target.value;
    getFilteredData();
  }

  handleSpeciesChange(event) {
    const { filtersData, getFilteredData } = this.props;
    filtersData.species = event.target.value;
    getFilteredData();
  }

  handleFiltersAccordion() {
    const context = this;
    this.setState({ filtersOpened: !context.state.filtersOpened });
  }

  render() {
    const { filtersData } = this.props;
    const { filtersOpened } = this.state;
    return (
      <aside className={filtersOpened ? 'sidebar clearfix' : 'sidebar clearfix no-filters'}>
        <div className="heading-box">
          <h2 className="sub-heading">Filters</h2>
          <button type="button" className="accordion-btn" onClick={this.handleFiltersAccordion} aria-label="Filters" />
        </div>

        <div className="category-box">
          <h3 className="category-title">Species</h3>
          <ul className="filter-category">
            <li>
              <label className="custom-radio">
                <input type="radio" name="species" value="Human" checked={filtersData.species === 'Human'} onChange={this.handleSpeciesChange} />
                <span className="icon" />
                Human
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="species" value="Mytholog" checked={filtersData.species === 'Mytholog'} onChange={this.handleSpeciesChange} />
                <span className="icon" />
                Mytholog
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="species" value="" checked={!filtersData.species} onChange={this.handleSpeciesChange} />
                <span className="icon" />
                All
              </label>
            </li>
          </ul>
        </div>

        <div className="category-box">
          <h3 className="category-title">Gender</h3>
          <ul className="filter-category">
            <li>
              <label className="custom-radio">
                <input type="radio" name="gender" value="male" checked={filtersData.gender === 'male'} onChange={this.handleGenderChange} />
                <span className="icon" />
                Male
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="gender" value="female" checked={filtersData.gender === 'female'} onChange={this.handleGenderChange} />
                <span className="icon" />
                Female
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="gender" value="" checked={!filtersData.gender} onChange={this.handleGenderChange} />
                <span className="icon" />
                All
              </label>
            </li>
          </ul>
        </div>


        <div className="category-box">
          <h3 className="category-title">Origin</h3>
          <ul className="filter-category">
            <li>
              <label className="custom-radio">
                <input type="radio" name="origin" value="Unknown" checked={filtersData.origin === 'Unknown'} onChange={this.handleOriginChange} />
                <span className="icon" />
                Unknown
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="origin" value="Earth" checked={filtersData.origin === 'Earth'} onChange={this.handleOriginChange} />
                <span className="icon" />
                Post-Apocalyptic Earth
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="origin" value="Nuptia" checked={filtersData.origin === 'Nuptia'} onChange={this.handleOriginChange} />
                <span className="icon" />
                Nuptia
              </label>
            </li>
            <li>
              <label className="custom-radio">
                <input type="radio" name="origin" value="" checked={!filtersData.origin} onChange={this.handleOriginChange} />
                <span className="icon" />
                All regions
              </label>
            </li>

          </ul>
        </div>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  getFilteredData: PropTypes.func.isRequired,
  filtersData: PropTypes.object.isRequired,
};

export default Sidebar;
