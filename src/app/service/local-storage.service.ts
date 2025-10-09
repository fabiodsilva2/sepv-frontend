import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key: string): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return null;
  }

  removeItem(key: string): void {

    if (typeof window !== 'undefined' && window.localStorage) {

      if (this.getItem(key)){

        window.localStorage.removeItem(key);
      }
    }
  }

}
