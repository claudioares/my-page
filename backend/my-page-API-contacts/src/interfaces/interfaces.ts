export interface IMessegeClient {
    name: string,
    email: string,
    messege: string
}

export interface ITypeIdParams {
    id: string
}

export interface IMethodsOfMesseges {
    create(data:IMessegeClient):Promise<IMessegeClient>
    getMesseges():Promise<IMessegeClient | null>
    getMessegeId(id:string):Promise<IMessegeClient | null>
    delMessegeId(id:string):Promise<string>
}