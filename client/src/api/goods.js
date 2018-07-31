import http from 'axios';

export const getGoodsList = async () => {
    let response = await http.get('/api/goods/');
    return response.data;
}

