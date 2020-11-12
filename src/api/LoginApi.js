import axios from 'axios';
import * as api from "../common"

export const LoginApi =() => {

    axios.post(`${api.baseUrlWithSuffixHyphen}signin`, {
        "username": this.state.username,
        "password": this.state.password,
      }).then(res => { console.log(res);
        console.log(res.data);
      }).catch(error => {
        return error;
      });

//   const URL = `YOUR_URL`;
//   return axios(URL, {
//     method: 'POST/GET',
//     headers: {
//       'content-type': 'application/json', // whatever you want
//     },
//     data: payload,
//   })
//     .then(response => response.data)
//     .catch(error => {
//       throw error;
//     });
};



// axios.post(`${api.baseUrlWithSuffixHyphen}signin`, {
//     "username": this.state.username,
//     "password": this.state.password,
//   }).then(res => {