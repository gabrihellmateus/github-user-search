import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
  private data: any;

  constructor() { }

  setData(item: string, data: any) {
    localStorage.setItem(item, JSON.stringify(data));

    this.data = localStorage.setItem(item, JSON.stringify(data));
  }

  getData(item: string) {
    this.data = JSON.parse(localStorage.getItem(item));

    return this.data || [];
  }

  hasData(item) {
    return JSON.parse(localStorage.getItem(item)) !== null;
  }
}
