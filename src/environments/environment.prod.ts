export const environment = {
  production: true,

  tfeOpenDataUrls: {
    stops: 'https://tfe-opendata.com/api/v1/stops',
    liveTimes: 'https://tfe-opendata.com/api/v1/live_bus_times/{stop_id}',
    route: 'https://tfeapp.com/api/website/route.php?service_name={route_name}'
  }
};
