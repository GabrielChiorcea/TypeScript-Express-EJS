import { faker } from "@faker-js/faker";

export class Company{
companyName: string
catchPhrase: string
location:{
    lat: number
    lng: number
}

constructor(){
    this.companyName = faker.company.name()
    this.catchPhrase = faker.company.catchPhrase()
    this.location= {
        lat: Number(faker.address.latitude()),
        lng: Number(faker.address.longitude())
    }
}

markerContent(): string{
    return `Company name is ${this.companyName}`
}
}

