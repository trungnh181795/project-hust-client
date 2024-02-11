import { MaybeNull } from '@/types'

export const findMaxValue = (values: number[]): number => {
  let max = values[0] // gán phần tử đầu tiên trong mảng là giá trị lớn nhất
  for (let i = 1; i < values.length; i++) {
    if (values[i] > max) {
      max = values[i] // nếu phần tử tiếp theo lớn hơn giá trị lớn nhất hiện tại, gán lại giá trị lớn nhất
    }
  }
  return max // trả về giá trị lớn nhất tìm được
}

export const roundUpToWholeNumber = (num: number): number => {
  return Math.ceil(num)
}

export const getNumberWithComma = (
  num: MaybeNull<number>
): MaybeNull<string> => {
  return num
    ? roundUpToWholeNumber(num)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : null
}

export const getPromotedPrice = (
  price: number,
  discountValue: number
): number => {
  const finalPrice = price - (price * discountValue) / 100

  return finalPrice
}
