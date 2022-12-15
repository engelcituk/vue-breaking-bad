import axios from 'axios'


const breakingBadApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    // params: {
    //     apikey: 'c87a58c96b65f05d41e293c4c8cd5a88',
    //     ts:1, 
    //     hash: '8811a394d40c2eec6fb6a3edfbb39e4a'
    // }
})



export default breakingBadApi