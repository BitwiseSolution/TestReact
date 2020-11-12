// import {baseUrl,currentEnv} from "./environments/environmentDev"
// // var base_url_dev = 'https://leuuydewi8.execute-api.us-east-2.amazonaws.com/dev'
// // export const baseUrlWithSuffixHyphen_dev = `${base_url_dev}/`




// // export const baseUrlWithSuffixHyphen = 'https://leuuydewi8.execute-api.us-east-2.amazonaws.com/dev/'


// export const baseUrlWithSuffixHyphen = `${baseUrl(currentEnv)}/`


import { baseUrl, currentEnv } from "./environments/environmentDev"

export const baseUrlWithSuffixHyphen = `${baseUrl(currentEnv)}/`