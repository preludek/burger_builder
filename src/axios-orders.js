import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-57229.firebaseio.com/'
})

export default instance;