import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ShoppingCartOutline, UserOutline } from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideClientHydration, withEventReplay, withNoHttpTransferCache } from '@angular/platform-browser';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { APP_CURRENCY, APP_LOCALE } from './core/constants/app-locale';

registerLocaleData(localeEn);
=======
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
<<<<<<< HEAD
    provideClientHydration(withEventReplay(), withNoHttpTransferCache()),
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor])),
    { provide: LOCALE_ID, useValue: APP_LOCALE },
    { provide: DEFAULT_CURRENCY_CODE, useValue: APP_CURRENCY },
=======
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    provideNzIcons([
      ShoppingCartOutline,
      UserOutline
    ])
  ]
};
