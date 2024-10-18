import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    try {
        console.log(url)
        const res =  axiosInstance({
            method:`${method}`,
            url:`${url}`,
            data: bodyData ? bodyData : null,
            headers: headers ? headers: null,
            params: params ? params : null,
        }); 
        return res;
    } catch (error) {
        console.log("error in apiconnect axios :: "  , error );
    }
}