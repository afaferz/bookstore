import { IAuthor } from './@types/Authors';
// A mock function to mimic making an async request for data
export async function addAuthor(author: IAuthor) {
    // const URL = process.env.API_URL
    const URL = '/authors/new'
    const params = {
        name: author.name
    }
    const configs = {
        method: 'POST',
        body: JSON.stringify(params)
    }
    try {
        const response = await fetch(URL, configs)
        const json = response.json()
        return json
    } catch (error) {

    }
}

export async function editAuthor(author: IAuthor) {
    const URL = `/authors/edit/${author.id}`
    const params = {
        name: author.name
    }
    const configs = {
        method: 'PUT',
        body: JSON.stringify(params)
    }
    try {
        const response = await fetch(URL, configs)
        const json = response.json()
        return json
    } catch (error) {

    }
}
export async function deleteAuthor(id: number) {
    const URL = `/authors/delete/${id}`
    const configs = {
        method: 'DELETE',
    }
    try {
        const response = await fetch(URL, configs)
        const json = response.json()
        return json
    } catch (error) {

    }
}


export async function listAuthor() {
    const URL = `/authors/list`
    const configs = {
        method: 'GET',
    }
    try {
        const response = await fetch(URL, configs)
        const json = response.json()
        return json
    } catch (error) {

    }
}

export async function detailAuthor(id: number) {
    const URL = `/authors/get/${id}`
    const configs = {
        method: 'GET',
    }
    try {
        const response = await fetch(URL, configs)
        const json = response.json()
        return json
    } catch (error) {

    }
}
