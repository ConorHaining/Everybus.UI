export interface DepartureInformation {
    serviceName: string;
    backgroundColour: string;
    textColour: string;

    departures: Departure[];
}

export interface Departure {
    when: string;
    destination: string;
    journeyId: string;
}
