const profile = {
  name: 'pete',
  age: 26,
  coords: {
    lat: 0,
    lon: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}

const { age }: { age: number } = profile

const {
  coords: { lat, lon }
}: {
  coords: {
    lat: number
    lon: number
  }
} = profile
