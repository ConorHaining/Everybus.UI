export interface Stop {
    atco_code: string;
    stop_id: string;
    name: string;
    identifer?: string;
    direction: string;
    latitude: string;
    longitude: string;
    destinations: string[];
}
