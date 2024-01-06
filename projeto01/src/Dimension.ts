export default class Dimension {
    constructor(readonly width: number, readonly heighy: number, readonly length: number){}

    getVolume() {
        return (this.width/100) * (this.heighy/100) * (this.length/100)
    }
}