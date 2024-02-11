export type GetDateReturn = {
  time: string
  day: string
}

type GetDateOptions = {
  textDay?: boolean
  toString?: boolean
}

export const getDate = (
  date: string,
  options?: GetDateOptions
): GetDateReturn | string => {
  const formattedDate = new Date(date)
  const time = formattedDate.toLocaleTimeString('vi', {
    hourCycle: 'h23',
  })
  const day = formattedDate.toLocaleDateString('vi', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return options?.toString
    ? `${time} ${day}`
    : {
        time,
        day,
      }
}

export const calculateDaysDifference = (lastDate: string): number => {
  // Parse the lastDate string into a Date object
  const lastDateObj = new Date(lastDate)

  // Get the current date
  const currentDate = new Date()

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate.getTime() - lastDateObj.getTime()

  // Calculate the number of days by dividing milliseconds by milliseconds per day
  const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24))

  return daysDifference
}
