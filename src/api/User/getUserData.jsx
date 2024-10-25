import axios from 'axios'
import {USER_DATA, accessToken} from "../../Fetch/settings"
import useTokenRefresh from "../../hooks/useTokenRefresh";

export const getUserData = (setData) => {

    axios.get(USER_DATA, {
        headers: {
            'Authorization': `JWT ${accessToken}`
            
        }
    })
    .then((response) => {
        setData(response.data)
        
    })
    .catch((error) => {
        if (error.response && error.response.status === 401) {
          useTokenRefresh();
        }
      });
}
