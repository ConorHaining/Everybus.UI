export interface DepartureInformation {
    routeName: string;
    backgroundColour: string;
    textColour: string;

    departures: Departure[];
}

export interface Departure {
    when: string;
    destination: string;
    tripId: string;
    vehicleId: string;
    departureTime: string;
    isLive: boolean;
    isDiverted: boolean;
}
