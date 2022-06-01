export class Api {
    private baseUrl: string;

    constructor() {
        this.baseUrl = process.env.IS_LOCAL === '1' ? 'http://localhost:2001/' : 'https://api-bookstore/'
    }

    async GET(path: string, params: any): Promise<any> {
        const bodyParams = { ...params }
        const URL = `${this.baseUrl}${path}`
        const resp = await fetch(URL, {
            body: JSON.parse(bodyParams)
        })
        const data = await resp.json()

        return data
    }
}