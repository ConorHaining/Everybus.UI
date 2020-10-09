export const environment = {
  production: true,

  tfeOpenDataUrls: {
    stops: 'https://tfe-opendata.com/api/v1/stops',
    liveTimes: 'https://everybus.azurewebsites.net/api/departures/{atco_code}',
    route: 'https://tfeapp.com/api/website/route.php?service_name={route_name}',
    vehicleLocations: 'https://everybus.azurewebsites.net/api/locations',
  }
};
