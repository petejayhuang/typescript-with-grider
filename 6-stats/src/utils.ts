export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/')
    .map((value: string): number => parseInt(value))

  const year = dateParts[2]
  const month = dateParts[1] - 1
  const day = dateParts[0]

  return new Date(year, month, day)
}
