import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DepartureInformation } from '../stop-details-page/models/DepartureInformation';
import { Stop } from './../models/Stop';

@Injectable({
  providedIn: 'root'
})
export class StopsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getAllStops(): Observable<Stop[]> {
    return this.http.get<Stop[]>(environment.tfeOpenDataUrls.stops).pipe(
      pluck('stops'),
      map((response: any[]) => {
        return response.map((stop: any) => {
          return {
            atco_code: stop.atco_code?.toString(),
            stop_id: stop.stop_id?.toString(),
            name: stop.name?.toString(),
            direction: stop.direction?.toString(),
            latitude: stop.latitude?.toString(),
            longitude: stop.longitude?.toString(),
            destinations: stop.destinations
          } as Stop;
        });
      })
    );
  }

  getStopByAtco(atcoCode: string): Observable<Stop> {
    return this.getAllStops()
      .pipe(
        map((response: any[]) => {
          return response.find(stop => stop.atco_code === atcoCode);
        })
      );
  }

  getStopByStopId(stopId: string): Observable<Stop> {
    return this.getAllStops()
      .pipe(
        map((response: any[]) => {
          return response.find(stop => stop.stop_id === stopId);
        })
      );
  }

  getStopDepartures(stopId: string): Observable<DepartureInformation[]> {
    const url = environment.tfeOpenDataUrls.liveTimes.replace('{stop_id}', stopId);
    return this.http.get<DepartureInformation[]>(url).pipe(
      map(response => {
        response.map(route => {
          const colours = this.getRouteColours(route.routeName);

          if (colours) {
            route.backgroundColour = colours.backgroundColour;
            route.textColour = colours.textColour;
          }

          return route;
        });

        return response;
      })
    );
  }

  getRouteColours(routeName: string) {
    const colourDictionary = {
      1: {
        backgroundColour: '#9EC9ED',
        textColour: '#FFFFFF'
      },
      2: {
        backgroundColour: '#4da42f',
        textColour: '#FFFFFF'
      },
      3: {
        backgroundColour: '#DECE00',
        textColour: '#000000'
      },
      4: {
        backgroundColour: '#5668af',
        textColour: '#FFFFFF'
      },
      5: {
        backgroundColour: '#F9B233',
        textColour: '#FFFFFF'
      },
      7: {
        backgroundColour: '#F49F95',
        textColour: '#FFFFFF'
      },
      8: {
        backgroundColour: '#117032',
        textColour: '#FFFFFF'
      },
      10: {
        backgroundColour: '#9d754e',
        textColour: '#FFFFFF'
      },
      11: {
        backgroundColour: '#B11A23',
        textColour: '#FFFFFF'
      },
      12: {
        backgroundColour: '#B11A23',
        textColour: '#FFFFFF'
      },
      14: {
        backgroundColour: '#575756',
        textColour: '#FFFFFF'
      },
      16: {
        backgroundColour: '#4B4328',
        textColour: '#FFFFFF'
      },
      19: {
        backgroundColour: '#c67f01',
        textColour: '#FFFFFF'
      },
      20: {
        backgroundColour: '#D19571',
        textColour: '#FFFFFF'
      },
      21: {
        backgroundColour: '#AC7BB5',
        textColour: '#FFFFFF'
      },
      22: {
        backgroundColour: '#E8378C',
        textColour: '#FFFFFF'
      },
      23: {
        backgroundColour: '#243881',
        textColour: '#FFFFFF'
      },
      24: {
        backgroundColour: '#EA5480',
        textColour: '#FFFFFF'
      },
      25: {
        backgroundColour: '#951B81',
        textColour: '#FFFFFF'
      },
      26: {
        backgroundColour: '#E30613',
        textColour: '#FFFFFF'
      },
      X26: {
        backgroundColour: '#FDD835',
        textColour: '#000000'
      },
      27: {
        backgroundColour: '#ED6F30',
        textColour: '#FFFFFF'
      },
      29: {
        backgroundColour: '#E6361C',
        textColour: '#FFFFFF'
      },
      X29: {
        backgroundColour: '#FDD835',
        textColour: '#000000'
      },
      30: {
        backgroundColour: '#CA7416',
        textColour: '#FFFFFF'
      },
      31: {
        backgroundColour: '#7B6A58',
        textColour: '#FFFFFF'
      },
      X31: {
        backgroundColour: '#FDD835',
        textColour: '#000000'
      },
      33: {
        backgroundColour: '#644E32',
        textColour: '#FFFFFF'
      },
      X33: {
        backgroundColour: '#FDD835',
        textColour: '#000000'
      },
      34: {
        backgroundColour: '#2B2171',
        textColour: '#FFFFFF'
      },
      35: {
        backgroundColour: '#d2062a',
        textColour: '#FFFFFF'
      },
      36: {
        backgroundColour: '#6eba6e',
        textColour: '#FFFFFF'
      },
      37: {
        backgroundColour: '#355FAA',
        textColour: '#FFFFFF'
      },
      X37: {
        backgroundColour: '#FDD835',
        textColour: '#000000'
      },
      38: {
        backgroundColour: '#D4C663',
        textColour: '#000000'
      },
      41: {
        backgroundColour: '#AB4236',
        textColour: '#FFFFFF'
      },
      42: {
        backgroundColour: '#9dc73c',
        textColour: '#000000'
      },
      44: {
        backgroundColour: '#878787',
        textColour: '#FFFFFF'
      },
      X44: {
        backgroundColour: '#FDD835',
        textColour: '#000000'
      },
      47: {
        backgroundColour: '#2cab6e',
        textColour: '#FFFFFF'
      },
      48: {
        backgroundColour: '#329E51',
        textColour: '#FFFFFF'
      },
      49: {
        backgroundColour: '#0B91CF',
        textColour: '#FFFFFF'
      },
      63: {
        backgroundColour: '#5E5E58',
        textColour: '#FFFFFF'
      },
      100: {
        backgroundColour: '#0082BA',
        textColour: '#FFFFFF'
      },
      200: {
        backgroundColour: '#004B87',
        textColour: '#FFFFFF'
      },
      300: {
        backgroundColour: '#004B87',
        textColour: '#FFFFFF'
      },
      400: {
        backgroundColour: '#004B87',
        textColour: '#FFFFFF'
      },
      T50: {
        backgroundColour: '#8E9393',
        textColour: '#FFFFFF'
      },
      X17: {
        backgroundColour: '#1775B6',
        textColour: '#FFFFFF'
      },
      X18: {
        backgroundColour: '#1775B6',
        textColour: '#FFFFFF'
      },
      X27: {
        backgroundColour: '#1775B6',
        textColour: '#FFFFFF'
      },
      X28: {
        backgroundColour: '#1775B6',
        textColour: '#FFFFFF'
      },
      43: {
        backgroundColour: '#387823',
        textColour: '#FFFFFF'
      },
      275: {
        backgroundColour: '#1775B6',
        textColour: '#FFFFFF'
      },
      280: {
        backgroundColour: '#1775B6',
        textColour: '#FFFFFF'
      }
    };

    return colourDictionary[routeName];
  }
}
