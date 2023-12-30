import Segment from "./Segment"

export default class Ride {
    segments: Segment[]
    OVERNIGHT_FARE = 3.9
    SUNDAY_FARE = 2.9
    OVERNIGHT_SUNDAY_FARE = 5
    NORMAL_FARE = 2.1
    MIN_FARE = 10

    constructor() {
        this.segments = []
    }

    addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date))
    }

    finish() {
        let fare = 0
        for (const segment of this.segments) {
            if (segment.isOvernight() && segment.isSunday()) {
                fare += segment.distance * this.OVERNIGHT_SUNDAY_FARE;
            }

            if (segment.isOvernight() && !segment.isSunday()) {
                fare += segment.distance * this.OVERNIGHT_FARE;
            }

            if (!segment.isOvernight() && segment.isSunday()) {
                fare += segment.distance * this.SUNDAY_FARE;
            }

            if (!segment.isOvernight() && !segment.isSunday()) {
                fare += segment.distance * this.NORMAL_FARE;
            }
        }
        return (fare > this.MIN_FARE) ? fare : this.MIN_FARE
    }
}