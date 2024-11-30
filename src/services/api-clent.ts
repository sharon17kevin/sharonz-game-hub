import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7af71124eb32438eac14bfac6d2c8fa7'
    }
})