import { Injectable } from '@angular/core';
import { CookieServiceService } from './cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class CookieTokenServiceService {

  private   tokenName: string = 'api_refresh_token';

  constructor(private cookieService: CookieServiceService) { }

  /**
   * The current Refresh Token
   */
  getRefreshToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      const cookie: string = this.cookieService.get(this.tokenName);
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
    return new Promise((resolve) => {
      this.cookieService.set(this.tokenName, token);
      resolve(null);
    });
  }

  /**
   * Delete the Refresh Token
   */
  deleteRefreshToken(): Promise<any> {
    return new Promise(() => {
      this.cookieService.delete(this.tokenName);
    });
  }

}
