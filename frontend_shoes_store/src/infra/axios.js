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

    static async postData(data, enpoint) {
        const instance = await this.getInstance()

        const response = await instance.post(enpoint, data)
        return response
    }
}
