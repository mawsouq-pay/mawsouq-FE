import Config from '@/Config';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: Config.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});





export default apiClient;
