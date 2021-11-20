export interface IServicesData {
    id: number
    name: string
    description: string
    price: number
    createdAt: string
    updatedAt: string
    typeId: number
}


interface IRows {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    servicesData: IServicesData[]
}


export interface IServices {
    count: number
    rows: IRows[]
}

export interface IType {
    id: number
    name:string
}