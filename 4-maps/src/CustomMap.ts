import { User } from './User'
import { Company } from './Company'

export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

export class CustomMap {
  // public is default
  // anyone outside this class can reference this
  // i.e. call it, it's methods
  private googleMap: google.maps.Map

  constructor(divId: string) {
    const map = document.getElementById(divId)

    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  /*
    we choose "mappable: Mappable" over "mappable: User | Company" etc
    because it is much more flexible
    in the latter, what happens if you want to add Park, or Country?
    you'll have to import that type or class at top
    and put it in the argument list with a pipe in addMarker()
    this isn't scalable and prone to error
    
    also, when you use the "or" operator for types
    what ts does is find the intersection of the types
    i.e. from the total list of types
    ts will figure and filter for just thoses types that exist on both types
    an interface is a bottom up approach, but requires the developer's input
    so instead of letting ts find the intersection
    we state the intersect.
    e.g. we say argument mappable can work with any interface "Mappable"
    Mappable is a type which has the location property,
    so any class or object that has the location property (and the lat lng part)
    can be used with addMarker()
  */
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
