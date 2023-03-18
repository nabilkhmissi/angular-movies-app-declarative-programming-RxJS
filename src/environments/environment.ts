// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  moviesUrl: "https://moviesdatabase.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': 'a3016d71cdmsh1abd656f4266b82p1d6b33jsn9e1aeb29885c',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
