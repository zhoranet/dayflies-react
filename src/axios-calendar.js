import axios from 'axios';
import * as secrets from './secrets';

const instance = axios.create({
    //baseURL: secrets.API_URL
});


export default instance;