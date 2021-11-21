export interface ICreateSignatureDTO{
    days: number
    name: string
    product: [{
        id: string,
        name: string,
        price: number,
        merchant_id: string,
    }]
}
