import { VehicleTrackingService } from './../services/vehicle-tracking.service';
import { Component, OnInit } from '@angular/core';
import { circle, geoJSON, GeoJSON, latLng, LatLng, Layer, MapOptions, polygon, tileLayer } from 'leaflet';

@Component({
  selector: 'map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      })
    ],
    zoom: 14,
    center: latLng(55.949680, -3.204165),
    zoomControl: false
  };
  center: LatLng = latLng(55.949680, -3.204165);

  vehicleLayer: GeoJSON;

  constructor(
    private readonly vehicleTracking: VehicleTrackingService
  ) { }

  ngOnInit(): void {
    const data = JSON.parse('{"features":[{"geometry":{"coordinates":[-3.234966,55.93347],"type":"Point"},"properties":{"heading":51,"colour":"#878787","text_colour":"#FFFFFF","name":"44","vehicleId":"875","last_update":"09/29/2020 22:36:12","destination":"Wallyford"},"type":"Feature"}, {"geometry":{"coordinates":[-3.203486,55.95071],"type":"Point"},"properties":{"heading":254,"colour":"#E8378C","text_colour":"#FFFFFF","name":"22","vehicleId":"368","last_update":"09/29/2020 22:55:12","destination":"Gyle Centre"},"type":"Feature"}],"type":"FeatureCollection"}');
    this.vehicleLayer = geoJSON(data);

    this.vehicleTracking.pollForAllVehicleLocations().subscribe(vehicleLocations => {
      const requestedVehicle: any = Array.from(vehicleLocations.features).find((x: any) => x.properties.vehicleId === '569');
      this.center = latLng(requestedVehicle.geometry.coordinates[1], requestedVehicle.geometry.coordinates[0]);
      const parsedGeoJson = geoJSON(requestedVehicle);
      this.vehicleLayer = parsedGeoJson;
    });
  }

}
