interface Reportable {
  summary(): string
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const drink = {
  color: 'green',
  carbonated: true,
  sugar: 50,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary)
}

printSummary(oldCivic)
printSummary(drink)

// we can use a single interface
// to describe the shape of very different objects
// we can have those objects implement different things
// encourages writing general functions
