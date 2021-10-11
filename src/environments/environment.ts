// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { NgxLoggerLevel } from "ngx-logger";


export const environment = {
  production: false,
  BASE_AUTH_URL: 'http://localhost:8080/auth',
  BASE_RESTAURANT_URL: 'http://localhost:8080/restaurant',
  BASE_DRIVER_URL: 'http://localhost:8080/driver',
  USERS_GET_ALL_URL: '/accounts',
  USERS_GET_URL: '/accounts/',
  BASE_CUSTOMERS_URL: 'http://localhost:8080/customer/customers',
  BASE_ORDERS_URL: 'http://localhost:8080/order/orders',
  logLevel: NgxLoggerLevel.TRACE,
  serverLogLevel: NgxLoggerLevel.OFF
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
