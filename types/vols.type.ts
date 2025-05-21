export interface FlightOptionType {
  dayOfWeek: string
  date: string
  departureAirport: string
  arrivalAirport: string
  airline: string
  isDirect: boolean
}

export interface Destination {
  id: number;
  city: string;
  country: string;
  imageUrl: string;
  flightOptions: FlightOptionType[];
  startingPrice: string;
}