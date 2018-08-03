import http from 'axios';

export const getGoodsList = async () => {
    try {
        let response = await http.get('/api/goods/');
        return response.data;
    } catch (error) {
        throw new Error(error.response.status + ' ' + error.response.statusText);
    }   
}

export const uploadGoodsInfo = async (formData) => {
    try {
        let response = await http.post("/api/goods/", formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.status + ' ' + error.response.statusText);
    }
}