

export interface IToys {
    count: number
    rows: IToy[]
}

export interface IToy {
    id: number
    name: string
    price: number
    img: string
    createdAt: string
    updatedAt: string
}