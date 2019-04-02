import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  setConfig(showSlide?:boolean){
    
    let perfil = {
      showSlide: false
    }

    if(showSlide){
      perfil.showSlide = showSlide;
    }

    localStorage.setItem("config", JSON.stringify(perfil));
  }
  getConfig():any{
    return localStorage.getItem("config");
  }

  clearConfig(){
    localStorage.clear();
  }
}
