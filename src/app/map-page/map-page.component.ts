import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { divIcon, geoJSON, GeoJSON, GeoJSONOptions, icon, latLng, LatLng, MapOptions, marker, tileLayer } from 'leaflet';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { VehicleTrackingService } from './../services/vehicle-tracking.service';

@Component({
  selector: 'map-page',
  templateUrl: './map-page.component.html',
})
export class MapPageComponent implements OnInit, OnDestroy {

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

  vehicle: any;
  vehicleLayer: GeoJSON;
  vehicleId: string;
  private vehicleUpdates: Subscription;

  constructor(
    private readonly vehicleTracking: VehicleTrackingService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      map(params => params.get('vehicleId'))
    ).subscribe(vehicleId => { this.vehicleId = vehicleId; });

    this.vehicleUpdates = this.vehicleTracking.pollForAllVehicleLocations().subscribe(vehicleLocations => {
      this.vehicle = Array.from(vehicleLocations.features).find((x: any) => x.properties.vehicleId === this.vehicleId);
      this.center = latLng(this.vehicle.geometry.coordinates[1], this.vehicle.geometry.coordinates[0]);

      const geoJsonOptions: GeoJSONOptions = {
        pointToLayer: (geoJsonPoint, latlng) => {
          return marker(latlng, {
            icon: divIcon({
              html: this.createIconMarkup(geoJsonPoint)
            })
          });
        }
      };

      const parsedGeoJson = geoJSON(this.vehicle, geoJsonOptions);
      this.vehicleLayer = parsedGeoJson;
    });
  }

  private createIconMarkup(geoJsonPoint: GeoJSON.Feature): string {
    return `<div class="bus">
                  <span style="color: ${geoJsonPoint.properties.text_colour};">${geoJsonPoint.properties.name}</span>
                  <div class="arrow_box" style="background-color: ${geoJsonPoint.properties.colour};
                                                border: 0 solid ${geoJsonPoint.properties.colour};
                                                transform: rotate(${geoJsonPoint.properties.heading}deg);"></div>
              </div>`;
  }

  ngOnDestroy(): void {
    this.vehicleUpdates.unsubscribe();
  }

}
