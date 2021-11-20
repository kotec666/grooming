 interface IBasketServiceItem {
    id: number
    createdAt: string
    updatedAt: string
    basketId: number
    serviceId: number
}

 interface IBasketToyItem {
    id: number
    createdAt: string
    updatedAt: string
    basketId: number
    toyId: number
}


interface IBasketService {
    id: number
    name: string
    description: string
    price: number
    createdAt: string
    updatedAt: string
    typeId: number
    basket_service: IBasketServiceItem
}


interface IBasketToy {
    id: number
    name: string
    price: number
    img: string
    createdAt: string
    updatedAt: string
    basket_toy: IBasketToyItem
}


export interface IBasket {
    id: number
    createdAt: string
    updatedAt: string
    userId: number
    services: IBasketService[]
    toys: IBasketToy[]
}