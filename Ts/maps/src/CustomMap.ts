

interface Marker{
    location:{
        lat : number,
        lng: number
    }
    markerContent(): string
}


export class CustomMap{

private googleMap: google.maps.Map;

constructor(divId: string){
   this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
        zoom: 1, center: {
            lat : 0,
            lng: 0
        }
    }) 
}
addMarker(marker: Marker): void{ 
   const addMarker =  new google.maps.Marker({

        map: this.googleMap,
        position:{
            lat: marker.location.lat,
            lng: marker.location.lng
    
        }
    })

    addMarker.addListener("click", () => { 

        const infoMarker = new google.maps.InfoWindow({
            content: marker.markerContent()
        })
        infoMarker.open(this.googleMap, addMarker)
    })
}


}