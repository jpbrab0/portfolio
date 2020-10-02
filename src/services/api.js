import axios from 'axios'

const api = axios.create({
    baseURL:'https://newsletter-blog-api.herokuapp.com'
})

export default api

