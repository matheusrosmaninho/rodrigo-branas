export default class Cpf {
    readonly value: string
    private FIRST_DIGIT_FACTOR = 10
    private SECOND_DIGIT_FACTOR = 11

    constructor(value: string){
        if (!this.validate(value)) throw new Error("CPF Inválido");
        this.value = value

    }

    private validate(rawCpf: string | null): boolean {
        if (rawCpf === null || rawCpf === undefined) return false
        const cpf = this.cleanCpf(rawCpf)
        if (!this.isValidLength(cpf)) return false
        if (this.isIdenticalDigits(cpf)) return false

        const calculateCheckDigit1 = this.calculateCheckDigit(cpf, this.FIRST_DIGIT_FACTOR)
        const calculateCheckDigit2 = this.calculateCheckDigit(cpf, this.SECOND_DIGIT_FACTOR)

        let checkDigit = this.extractCheckDigits(cpf)
        const calculatedCheckDigit = `${calculateCheckDigit1}${calculateCheckDigit2}`
        return checkDigit === calculatedCheckDigit;
    }

    private cleanCpf(cpf: string): string {
        return cpf.replace(/\D/g, '')
    }

    private isValidLength(cpf: string): boolean {
        return cpf.length === 11
    }

    private isIdenticalDigits(cpf: string): boolean {
        const [firstDigit] = cpf
        return [...cpf].every(digit => digit === firstDigit)
    }

    private calculateCheckDigit(cpf: string, factor: number) {
        const total = [...cpf].reduce((total, digit) => {
            if (factor > 1) total += parseInt(digit) * factor--
            return total
        }, 0);
        const rest = total % 11
        return (rest < 2) ? 0 : 11 - rest
    }

    private extractCheckDigits(cpf: string): string {
        return cpf.slice(-2)
    }

}