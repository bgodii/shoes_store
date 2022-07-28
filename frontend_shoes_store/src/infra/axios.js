import axios from "axios"


export default class API {
    constructor() {
        this.token = null
    }

    static async getInstance() {
        const instance = axios.create({
            baseURL: "http://localhost:8000",
            timeout: 10000,
            withCredentials: false
        })

        if (!this.token) {
            await instance.post("/api/token/",
                {
                    "username": "admin",
                    "password": "admin"
                }
            ).then(response => this.token = response.data.access)
        }

        instance.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        return instance
    }

    static async postData(data, enpoint, headers = {}) {
        const instance = await this.getInstance()

        const response = await instance.post(enpoint, data, headers)
        return response
    }
    static async uploadFile(data, endpoint) {
        const instance = await this.getInstance()
        instance.defaults.headers.common['Content-Type'] = 'multipart/form-data'

        const response = await instance.post(endpoint, data)
        return response
    }

    static async getData(endpoint) {
        const instance = await this.getInstance()
        const response = await instance.get(endpoint)
        return response
    }

    static async removeData(endpoint) {
        const instance = await this.getInstance()
        const response = await instance.delete(endpoint)
        return response
    }

    static async updateData(data, endpoint) {
        const instance = await this.getInstance()
        const response = await instance.put(endpoint, data)
        return response
    }
}
