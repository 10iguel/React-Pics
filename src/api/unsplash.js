import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization:
            'Client-ID ydmoSXJ6DQLjEOIPKtm-dVXaKIQld6ckqEO2aT32TUM'
    }
})