const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// a tuple type alias!
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]

const carSpecs: [number, number] = [400, 3355]

const carStats = {
  horsePower: 400,
  weight: 3355
}
