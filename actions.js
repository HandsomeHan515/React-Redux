//action 创建函数
const action = (type, payload = {}) => ({ type, payload });

export const GET_ADS = 'GET_ADS';
export const ADD_ADS = 'ADD_ADS';
export const UPDATE_ADS = 'UPDATE_ADS';
export const DEL_ADS = 'DEL_ADS';

export const getAds = () => action(GET_ADS);
export const addAds = payload => action(ADD_ADS, payload);
export const updateAds = payload => action(UPDATE_ADS, payload);
export const delAds = payload => action(DEL_ADS, payload);
