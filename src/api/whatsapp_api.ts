export function generateWhatsappLink(phoneNumber: string, message?: string) {
    
    const encodedMessage = message ? encodeURI(message) : ''

    return `https://wa.me/${phoneNumber}${encodedMessage ? `?text=${encodedMessage}` : ""}`
}