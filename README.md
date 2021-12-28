# CookieService

[![GitHub release](https://img.shields.io/github/release/attus74/cookie-service.svg)](https://GitHub.com/attus74/cookie-service/releases/)
[![GitHub release](https://img.shields.io/github/release/attus74/cookie-service.svg)](https://GitHub.com/attus74/cookie-service/releases/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/attus74/cookie-service/graphs/commit-activity)
[![Npm package version](https://badgen.net/npm/v/@attus/cookie-service)](https://npmjs.com/package/@attus/cookie-service)
[![Npm package license](https://badgen.net/npm/license/@attus/cookie-service)](https://npmjs.com/package/@attus/cookie-service)
[![GitHub issues](https://img.shields.io/github/issues/attus74/cookie-service.svg)](https://GitHub.com/attus74/cookie-service/issues/)

Yes, I know, the services have weird names. I don't want to change them, in order to maintain compatibility.

In module.ts:
```ts
import {CookieServiceModule} from '@attus/cookie-service';

imports: [
  CookieServiceModule,
],
```

In component.ts:
```ts
import {CookieServiceService} from '@attus/cookie-service';

const a: string = this.cookieService.get(cookie_name);
this.cookieService.set(cookie_name, cookie_value);
this.cookieService.delete(cookie_name);
```

You may use a simplified service for Refresh Token. It is applicable for [Angular Client](https://github.com/attus74/angular-client).

In module.ts:
```ts

import { CookieTokenServiceService } from '@attus/cookie-service';

@NgModule({
  imports: [
    AngularClientModule,
  ],
  providers: [
    {
      provide: 'ANGULAR_CLIENT_TOKEN_SERVICE',
      **useClass: CookieTokenServiceService,**
    },
    {
      provide: 'ANGULAR_CLIENT_CONFIG',
      useValue: environment.apiClient,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

```