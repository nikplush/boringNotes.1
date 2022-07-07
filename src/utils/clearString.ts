export const clearString = (string: string) => {
    let cleanedString = string
    const startIndex = string.indexOf('<')
    const endIndex = string.indexOf('>')
    if (startIndex >= 0 && endIndex >= 0 ) {
        const tag = cleanedString.slice(startIndex, endIndex+1)
        const newString = string.replace(tag,'')
        cleanedString = clearString(newString)
    }
    return cleanedString
}