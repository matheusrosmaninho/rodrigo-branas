export default class Item {
    constructor(readonly id: number, readonly description: string, readonly price: number, readonly width?: number, readonly heighy?: number, readonly length?: number, readonly weight?: number) {
    }

    getVolume() {
        if (this.width && this.heighy && this.length && this.weight)
            return (this.width/100) * (this.heighy/100) * (this.length/100)
        return 0
    }

    getDensity()
    {
        if (this.width && this.heighy && this.length && this.weight)
            return this.weight/this.getVolume()
        return 0
    }
}