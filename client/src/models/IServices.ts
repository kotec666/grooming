export interface IServicesData {
    id: number
    name: string
    description: string
    price: number
    createdAt: string
    updatedAt: string
    typeId: number
}

export interface IServicesDataReq {
    name: string
    description: string
    price: number
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


//запрос на сервер
export interface ICreateTypeReq {
    name: string
}


//ответ от сервера
export interface ICreateTypeRes {
    id: number
    name: string
}
