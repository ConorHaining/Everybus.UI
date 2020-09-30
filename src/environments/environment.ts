// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  tfeOpenDataUrls: {
    stops: 'http://tfe-opendata.com/api/v1/stops',
    liveTimes: 'https://everybus.azurewebsites.net/api/departures/{atco_code}',
    route: 'https://tfeapp.com/api/website/route.php?service_name={route_name}',
    vehicleLocations: 'https://everybus.azurewebsites.net/api/locations',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
