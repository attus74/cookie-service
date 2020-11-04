import { Injectable } from '@angular/core';
import { CookieServiceService } from './cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class CookieTokenServiceService {

  constructor(private cookieService: CookieServiceService) { }

  /**
   * The current Refresh Token
   */
  getRefreshToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const cookie: string = this.cookieService.get('drupal_refresh_token');
      if (cookie === undefined) {
        reject();
      }
      else {
        resolve(cookie);
      }
    });
  }

  /**
   * Set a new Refresh Token
   * @param token
   */
  setRefreshToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cookieService.set('drupal_refresh_token', token);
      resolve();
    });
  }

  /**
   * Delete the Refresh Token
   */
  deleteRefreshToken(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cookieService.delete('drupal_refresh_token');
    });
  }

}
