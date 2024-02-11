export const maskString = (
  input: string,
  endIndex: number,
  length: number
): string => {
  if (typeof input !== 'string' || input.trim() === '') {
    return '' // Return empty string for invalid input
  }

  if (endIndex < 0 || length <= 0 || endIndex - length < 0) {
    throw new Error('Invalid input parameters')
  }

  const maskedPart = '*'.repeat(length)

  let maskedString: string

  // Check if the input is in email format
  const atIndex = input.indexOf('@')
  if (atIndex !== -1 && atIndex <= endIndex) {
    maskedString =
      input.substring(0, atIndex - length) +
      maskedPart +
      input.substring(atIndex)
  } else {
    maskedString =
      input.substring(0, endIndex - length) +
      maskedPart +
      input.substring(endIndex)
  }

  return maskedString
}
