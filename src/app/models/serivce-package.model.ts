export class ServicePackageModel {
    id: number | undefined
    name: string = '' 
    description: string = ''
    price: string = ''
    currency: string = ''
    isElectroBike: boolean = false
    fullinfo: string = this.description + " " + this.price+ " " + this.currency
}