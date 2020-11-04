import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieServiceService {

  constructor() { }

  /**
   * Set a new cookie
   * @param name 
   *  Name of cookie
   * @param value 
   *  Value of Cookie
   * @param expireIn 
   *  TTL of Cookie in Seconds, e.g. 7200 for two hours. 
   */
  set(name: string, value: any, expireIn?: number): void {
    if (expireIn === undefined) {
      expireIn = 86400 * 14; // Two weeks
    }
    let d = new Date();
    d.setSeconds(d.getSeconds() + expireIn);
    const cookieString = name + '=' + value + '; expires=' + d.toUTCString() + '; path=/';
    document.cookie = cookieString;
  }
  
  /**
   * Get the value of an existing cookie
   * @param name
   */
  get(name: string): any {
    const cookies: Array<string> = document.cookie.split('; ');
    let cookieParts: Array<string>
    for (let i in cookies) {
      cookieParts = cookies[i].trim().split('=');
      if (cookieParts[0] === name) {
        return cookieParts[1];
      }
    }
    return undefined;
  }
  
  /**
   * Delete an existing cookie
   * @param name 
   */
  delete(name: string): void {
    let d = new Date();
    d.setSeconds(d.getSeconds() - 86400);
    const cookieString = name + '=; expires=' + d.toUTCString() + '; path=/';
    document.cookie = cookieString;
  }

}
