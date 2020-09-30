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

  vehicleLayer: GeoJSON;

  constructor() { }

  ngOnInit(): void {
    const data = JSON.parse('{"features":[{"geometry":{"coordinates":[-3.234966,55.93347],"type":"Point"},"properties":{"heading":51,"colour":"#878787","text_colour":"#FFFFFF","name":"44","vehicleId":"875","last_update":"09/29/2020 22:36:12","destination":"Wallyford"},"type":"Feature"}, {"geometry":{"coordinates":[-3.203486,55.95071],"type":"Point"},"properties":{"heading":254,"colour":"#E8378C","text_colour":"#FFFFFF","name":"22","vehicleId":"368","last_update":"09/29/2020 22:55:12","destination":"Gyle Centre"},"type":"Feature"}],"type":"FeatureCollection"}');
    this.vehicleLayer = geoJSON(data);

    setTimeout(() => {
      const data2 = JSON.parse('{"features":[{"geometry":{"coordinates":[-3.20009,55.9513],"type":"Point"},"properties":{"heading":254,"colour":"#2B2171","text_colour":"#FFFFFF","name":"34","vehicleId":"910","last_update":"09/29/2020 22:58:42","destination":"Heriot Watt Uni"},"type":"Feature"}],"type":"FeatureCollection"}');
      this.vehicleLayer = geoJSON(data2);
    }, 2000);
  }

}
