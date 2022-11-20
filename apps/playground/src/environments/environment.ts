// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '/api',
  firebase: {
    projectId: 'playground-prod-842c4',
    appId: '1:771862493024:web:2077fdb5b9302fecef1005',
    storageBucket: 'playground-prod-842c4.appspot.com',
    apiKey: 'AIzaSyCErjdfJGxzPd0Kx_VKqySMhIwNNwS3AAw',
    authDomain: 'playground-prod-842c4.firebaseapp.com',
    messagingSenderId: '771862493024',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
