// no type inference for arguments
// but we do have it for the return
// you could leave out the type for the return
// but it's really handy at times
// e.g. whether you actually return something
const add = (a: number, b: number): number => a + b

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

// void = a function that returns null, undefined or nothing
const logger = (message: string): void => {
  console.log(message)
}

// we will never reach the end of the function
// in this case, the function will jump out and throw error
const throwError = (message: string): never => {
  throw new Error(message)
}

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({
  date,
  weather
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)
