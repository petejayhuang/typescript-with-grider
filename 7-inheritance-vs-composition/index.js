// what this file does is compose methods and state together
// which is the english definition
// but this isn't the programming definition
// in the book "Design Patterns", composition refers to
// an objecting having properties of another object
// e.g. a window having the property of 'rectangular'
// so, watch out
// this is better called "Multiple Inheritance"

const rectangular = state => {
  return {
    area: () => {
      return state.height * state.width
    }
  }
}

const openable = state => {
  return {
    toggleOpen: () => {
      state.open = !state.open
    }
  }
}

const buildRectangleWindow = state => {
  return Object.assign(state, rectangular(state), openable(state))
}

const rectangleWindow = buildRectangleWindow({
  height: 20,
  width: 20,
  open: false
})

console.log(rectangleWindow.open)
rectangleWindow.toggleOpen()
console.log(rectangleWindow.open)
