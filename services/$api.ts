import { Api } from "../lib/Api";

export default function $api() {
    const $api = new Api()

    return async function (method: string, path: string, params: any) {
        method = method.toUpperCase()
        let response = null
        let data = null
        let loading = null
        let error = null
        try {
            loading = true
            error = null
            response = await ($api as any)[method](path, params)
            data = await response.json()
            loading = false
        } catch (erro) {
            error = erro
        } finally {
            loading = false
            return { response, data, loading }
        }
    }
}