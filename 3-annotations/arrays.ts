// looks like you should always label your array
const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates: Date[] = [new Date(), new Date()]
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']]

// benefit: ts with help with inference when extracting values
// hover on car, you see ts knows the type
const car = carMakers[0]
const myCar = carMakers.pop()

// benefit: prevent incompat values
// carMakers.push(100)

// benefit: we get help with array functions
// e.g. autocomplete on variable
carMakers.map(carMaker => carMaker)

// flexible types in an array
const importantThings: (string | Date)[] = [new Date(), '2030-10-10']
importantThings.push('2019-07-03')
