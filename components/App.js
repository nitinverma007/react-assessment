import React, { Component } from 'react';
import Sidebar from './sidebar';
import MainContent from './MainContent';
import AppEngine from '../js/AppEngine';
import AjaxService from '../js/services/AjaxService';

class App extends Component {
  constructor() {
    super();

    this.filtersData = {
      species: '',
      gender: '',
      origin: '',
      name: '',
    };

    this.AppData = {};

    AppEngine.init().then((response) => response.json()).then((response) => {
      this.AppData = response;
      this.forceUpdate();
    }).catch((error) => {
      console.warn(error);
    });

    this.getFilteredData = this.getFilteredData.bind(this);
  }

  getFilteredData() {
    const API = 'https://rickandmortyapi.com/api/character/';
    const context = this;
    const params = context.filtersData;

    AjaxService(API, params).then((response) => response.json()).then((response) => {
      context.AppData.results = response.results;
      context.forceUpdate();
    }).catch((error) => {
      console.warn(error);
    });
  }

  render() {
    return (
      <main className="app-wrapper clearfix">
        <Sidebar getFilteredData={this.getFilteredData} filtersData={this.filtersData} />
        <MainContent
          getFilteredData={this.getFilteredData}
          filtersData={this.filtersData}
          MainContentData={this.AppData}
        />
      </main>
    );
  }
}


export default App;
