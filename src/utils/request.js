import axios from "axios";
import Config from "react-native-config";

export const request = async ({url, method, data}) => {
    const res = await axios({
        method: method || 'GET',
        url: `${Config.API_BASE_URL}/${url}`,
        data: data
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}