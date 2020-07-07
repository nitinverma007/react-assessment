import AjaxService from './services/AjaxService';

const AppEngine = {
  init() {
    const API = 'https://rickandmortyapi.com/api/character/';
    return AjaxService(API);
  },
};


export default AppEngine;
