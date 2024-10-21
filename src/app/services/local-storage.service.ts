import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { taskModel } from '../models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor( ) { }


  isLocalStorageAvailable(){
    return typeof window !== 'undefined' && window.localStorage;
  }

  getTasks(key: string){
   if(this.isLocalStorageAvailable()) {
    return JSON.parse(localStorage.getItem(key) || 'null');
   }

   return [];
  }

  modifyTask(key: string, updatedArray: taskModel[]){
    if(this.isLocalStorageAvailable()) {
      return localStorage.setItem(key, JSON.stringify(updatedArray) || 'null')
    }

    return [];
  }

  clearData(key: string){
    if(this.isLocalStorageAvailable()) {
      return localStorage.removeItem(key)
    }

    return [];
  }

  setLocalStorage(data: taskModel[]){
    return localStorage.setItem('tasksList', JSON.stringify(data));
  }
}
