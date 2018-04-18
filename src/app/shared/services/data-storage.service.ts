import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {
  private data: any;
  private cacheKeyPrefix = 'github-user-cache-';

  constructor() { }

  setPrefix(item: string) {
    console.log(this.cacheKeyPrefix + item);
    return `${this.cacheKeyPrefix + item}`;
  }

  setData(item: string, data: any) {
    const itemPrefixed = this.setPrefix(item);

    sessionStorage.setItem(itemPrefixed, JSON.stringify(data));

    this.data = sessionStorage.setItem(itemPrefixed, JSON.stringify(data));
  }

  getData(item: string) {
    const itemPrefixed = this.setPrefix(item);

    this.data = JSON.parse(sessionStorage.getItem(itemPrefixed));

    return this.data || [];
  }

  hasData(item) {
    const itemPrefixed = this.setPrefix(item);

    return JSON.parse(sessionStorage.getItem(itemPrefixed)) !== null;
  }
}
