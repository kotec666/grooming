 interface IOrderServiceItem {
    id: number
    createdAt: string
    updatedAt: string
    basketId: number
    serviceId: number
}

 interface IOrderToyItem {
    id: number
    createdAt: string
    updatedAt: string
    basketId: number
    toyId: number
}


interface IOrderService {
    id: number
    name: string
    description: string
    price: number
    createdAt: string
    updatedAt: string
    typeId: number
    order_service: IOrderServiceItem
}


interface IOrderToy {
    id: number
    name: string
    price: number
    img: string
    createdAt: string
    updatedAt: string
    order_toy: IOrderToyItem
}


export interface IOrder {
    id: number
    createdAt: string
    updatedAt: string
    userId: number
    services: IOrderService[]
    toys: IOrderToy[]
}