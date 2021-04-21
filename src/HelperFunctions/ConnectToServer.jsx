import axios from 'axios';

let config = {
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    },
};
export const connectToServer = async (url, data, onSuccess, onError) => {////data -> json,  data = null
    try {
        await axios.post(`http://82.81.73.230:5011/ws/${url}`, data, config)
            .then(res => onSuccess(res));// -> {status:true/false, data:{}, message:""}
    } catch (error) {
        onError(error);
    }
}

