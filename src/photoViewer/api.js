import axios from 'axios';

export const fetchPhotos = () => axios.get('https://jsonplaceholder.typicode.com/photos')
    .then(r => r.data);