import axios from 'axios'


const breakingBadApi = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
        apikey: 'c87a58c96b65f05d41e293c4c8cd5a88',
        ts:1, 
        hash: '4030213aff2c292b4e3cd8d04b7bf612'
    }
})



export default breakingBadApi