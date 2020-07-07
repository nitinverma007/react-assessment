import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

class CharactersList extends React.PureComponent {
  render() {
    const { charactersData } = this.props;
    let index = 0;
    return (
      <div className="characters-list">
        {
        charactersData && charactersData.map((character) => {
          index += 1;
          return <Character character={character} key={index} />;
        })
      }
      </div>
    );
  }
}

CharactersList.propTypes = {
  charactersData: PropTypes.array.isRequired,
};

export default CharactersList;
