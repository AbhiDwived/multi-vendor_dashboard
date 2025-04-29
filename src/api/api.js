import axios from 'axios'
const api = axios.create({
    baseURL: 'https://multi-vendor-backend-l3yd.onrender.com/api'
})
export default api