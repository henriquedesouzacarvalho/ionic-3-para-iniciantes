import { Injectable } from '@angular/core';

let cofigKeyName = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    userName: ""
  }

  constructor() {

  }

  //Retorna dados do localstorage
  getConfigData(): any {
    // return JSON.parse(localStorage.getItem(cofigKeyName));
    // return localStorage.getItem(cofigKeyName) || {};
    return localStorage.getItem(cofigKeyName);

  }

  //Grava dados do localstorage
  setConfigData(showSlide?:boolean, name?: string, userName?: string) {
    let config = {
      showSlide: false,
      name: "",
      userName: ""
    };

    if (showSlide) {
      config.showSlide = showSlide;
    }
    if (name) {
      config.name = name;
    }
    if (userName) {
      config.userName = userName;
    }

    localStorage.setItem(cofigKeyName, JSON.stringify(config));

  }

}
