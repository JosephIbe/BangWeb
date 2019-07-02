import Axios from 'axios';

const setAuthUserToken = token => {
    if (!token){
        delete Axios.defaults.headers.common['Authorization'];
    } else {
        Axios.defaults.headers.common['Authorization'] = token;
    }
};

export default setAuthUserToken;