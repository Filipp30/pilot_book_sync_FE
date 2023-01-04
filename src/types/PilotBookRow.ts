export default interface PilotBookRow {
    id: string,
    text: string|null,
    date: string,
    departurePlace: string|null,
    departureTime: string|null,
    arrivalPlace: string|null,
    arrivalTime: string,
    aircraftModel: string|null,
    aircraftRegistration: string|null,
    errors: Array<Object>|null
}