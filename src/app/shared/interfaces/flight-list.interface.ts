export interface FlightList {
    departureTime: string,
    arrivalTime: string
    destinationCode: string,
    originCode: string,
    operatingFlight: string,
    originPlace: string,
    destinationPlace: string,
    operatingFlightLogo: string,
    operatingCarrier: string,
    duration: string,
    cabinClass: string,
    currency: string,
    seatsLeft: number,
    displayPrice: number,
    flightNumber: string,
    isDirect: boolean,
}
