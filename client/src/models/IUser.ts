export interface IUser {
    id: number
    login: string
    email: string
    phone: string
    role: string
}



//запрос на сервер
export interface ILoginUserReq {
    login: string
    password: string
}


//ответ от сервера
export interface ILoginUserRes {
    token: string
}

//запрос на сервер
export interface IRegistrationUserReq {
    login: string
    password: string
    email: string
    phone: string
    role: string
}


//ответ от сервера
export interface IRegistrationUserRes {
    token: string
}

type Nullable<T> = T | null

//запрос на сервер
export interface ICheckUserReq {
    token: Nullable<string>
}


//ответ от сервера
export interface ICheckUserRes {
    token: Nullable<string>
}
