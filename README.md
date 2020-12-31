# CookieService

[![GitHub release](https://img.shields.io/github/release/attus74/cookie-service.svg)](https://GitHub.com/attus74/cookie-service/releases/)

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
