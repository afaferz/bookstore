import { URLSearchParams } from "url";

enum MethodsAllowed {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}
export class Api {
    private baseUrl: string;

    constructor() {
        this.baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:2001' : 'https://api-bookstore'
    }

    async [MethodsAllowed.GET](path: string, params: any): Promise<any> {
        let URL = `${this.baseUrl}${path}`
        const bodyParams = { ...params }
        if (Object.keys(bodyParams).length > 0) {
            URL = URL + '?' + new URLSearchParams({
                ...bodyParams
            })
        }
        const config = {
            method: 'GET',
        }
        const resp = await fetch(URL, config)

        return resp
    }
    async [MethodsAllowed.POST](path: string, params: any): Promise<any> {
        let URL = `${this.baseUrl}${path}`
        const bodyParams = { ...params }
        const config = {
            method: 'POST',
            body: JSON.stringify(bodyParams)
        }
        const resp = await fetch(URL, config)

        return resp
    }
}