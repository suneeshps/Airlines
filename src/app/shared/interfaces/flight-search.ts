export interface FlightSearch {
      tripCategory: number,
      departure: string,
      arrival: string,
      passengers: number,
      economyCategory: number,
      departureDate: Date,
      returnDate?: Date,
      travelDate?: Date
}
