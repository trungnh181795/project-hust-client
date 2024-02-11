export const isDiscountValid = (expiredAt: string): boolean => {
  const curDate = new Date().valueOf()
  const expiredDate = new Date(
    expiredAt || '2023-09-28T08:26:34.635Z'
  ).valueOf()

  return expiredDate - curDate > 0
}

export const shouldShowOriginalPrice = (
  price: number,
  expiredAt: string
): boolean => {
  return price > 0 && isDiscountValid(expiredAt)
}

export const phoneNumberFormat =
  /^(\+84|0)\d{9,10}$|^(\+84|0)\d{3}\s\d{3}\s\d{3}$/

export const validatePhoneNumber = (phoneNum: string): boolean => {
  return phoneNumberFormat.test(phoneNum)
}

export const formatPhoneNumber = (phoneNum: string): string => {
  if (/^\+84\d{9,10}$/.test(phoneNum)) {
    // If it matches the Vietnamese phone format with +84, return the string
    return phoneNum
  } else if (/^0\d{9,10}$/.test(phoneNum)) {
    // If it starts with 0 but doesn't match Vietnamese phone format, replace with +84
    return '+84' + phoneNum.slice(1)
  } else {
    return ''
  }
}
