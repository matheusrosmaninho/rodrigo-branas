import Segment from "./Segment"
import FareCalculator from "./FareCalculator";

export default class Ride {
    segments: Segment[]
    SUNDAY_FARE = 2.9
    NORMAL_FARE = 2.1
    MIN_FARE = 10

    constructor(readonly fareCalculator: FareCalculator) {
        this.segments = []
    }

    addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date))
    }

    finish() {
        let fare = 0
        for (const segment of this.segments) {
            fare += this.fareCalculator.calculate(segment)
        }
        return (fare > this.MIN_FARE) ? fare : this.MIN_FARE
    }
}