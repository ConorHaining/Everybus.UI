import { Component, OnInit } from '@angular/core';
import { circle, latLng, LatLng, MapOptions, polygon, tileLayer } from 'leaflet';

@Component({
  selector: 'map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  center: LatLng;
  options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      })
    ],
    zoom: 14,
    center: this.center,
    zoomControl: false
  };

  layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    overlays: {
      'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
      'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.center = latLng(55.949680, -3.204165);

    setInterval(() => {
      const lat = this.center.lat + 0.0001;
      const lng = this.center.lng + 0.0001;
      this.center = latLng(lat, lng);
    }, 500);
  }

}
