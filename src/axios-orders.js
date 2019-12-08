import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://react-my-burger-bado.firebaseio.com/'

});

export default instance;