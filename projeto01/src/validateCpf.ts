const FIRST_DIGIT_FACTOR = 10
const SECOND_DIGIT_FACTOR = 11

export function validateCpf(rawCpf: string | null): boolean {
    if (rawCpf === null || rawCpf === undefined) return false
    const cpf = cleanCpf(rawCpf)
    if (!isValidLength(cpf)) return false
    if (isIdenticalDigits(cpf)) return false

    const calculateCheckDigit1 = calculateCheckDigit(cpf, FIRST_DIGIT_FACTOR)
    const calculateCheckDigit2 = calculateCheckDigit(cpf, SECOND_DIGIT_FACTOR)

    let checkDigit = extractCheckDigits(cpf)
    const calculatedCheckDigit = `${calculateCheckDigit1}${calculateCheckDigit2}`
    return checkDigit === calculatedCheckDigit;
}

function cleanCpf(cpf: string): string {
    return cpf.replace(/\D/g, '')
}

function isValidLength(cpf: string): boolean {
    return cpf.length === 11
}

function isIdenticalDigits(cpf: string): boolean {
    const [firstDigit] = cpf
    return [...cpf].every(digit => digit === firstDigit)
}

function calculateCheckDigit(cpf: string, factor: number) {
    const total = [...cpf].reduce((total, digit) => {
        if (factor > 1) total += parseInt(digit) * factor--
        return total
    }, 0);
    const rest = total % 11
    return (rest < 2) ? 0 : 11 - rest
}

function extractCheckDigits(cpf: string): string {
    return cpf.slice(-2)
}
