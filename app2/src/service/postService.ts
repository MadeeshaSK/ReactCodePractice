import axios from 'axios';
import baseUrl from '../env/env';

const api = axios.create({
    baseURL: `${baseUrl()}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

const loadAllPosts = async () => {
    return api.get('/posts')
}
export default loadAllPosts;