import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Character extends Component {
  static calculateIDCreationDate(creationDate) {
    return ((new Date() - new Date(creationDate)) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
  }

  render() {
    const { character } = this.props;
    return (
      <div className="character">
        <div className="image-box">
          <img className="character-pic" alt={character.name} src={character.image} />
          <div className="details-overlay">
            <p className="name">{character.name}</p>
            <p className="id">
              ID:&nbsp;
              {character.id} 
              {' '}
              - Created &nbsp;
              {Character.calculateIDCreationDate(character.created)}
              {' '}
              years ago
            </p>
          </div>
        </div>
        <p className="detail-item">
          <span className="title">Status</span>
          <span className="description">{character.status}</span>
        </p>
        <p className="detail-item">
          <span className="title">Species</span>
          <span className="description">{character.species}</span>
        </p>
        <p className="detail-item">
          <span className="title">Gender</span>
          <span className="description">{character.gender}</span>
        </p>
        <p className="detail-item">
          <span className="title">Origin</span>
          <span className="description">{character.origin.name}</span>
        </p>
        <p className="detail-item">
          <span className="title">Last Location</span>
          <span className="description">{character.location.name}</span>
        </p>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};


export default Character;
