// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: 'AIzaSyDs0Zg3070-Pq5e8ydBt9pMg208x9HJ6Ms',
    authDomain: 'phototag-b6e46.firebaseapp.com',
    projectId: 'phototag-b6e46',
    storageBucket: 'phototag-b6e46.appspot.com',
    messagingSenderId: '654919622124',
    appId: '1:654919622124:web:1c0b0fcc20b69dc28234c9'
  },
    baseUrl: 'https://localhost:40443/'
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
