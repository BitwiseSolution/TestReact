// export const baseUrl=(env)=>{
//     let base_url = 'https://leuuydewi8.execute-api.us-east-2.amazonaws.com/'+env
//      return base_url
//  }




//  export const currentEnv='dev'


export const baseUrl = (env) => {
    let base_url = '';
    if (env === 'test') {
        base_url = 'https://api-test.com'

    } else if (env === 'demo') {
        base_url = 'https://api-demo.com'

    } else if (env === 'prod') {
        base_url = 'https://api..net'

    }
    return base_url
}


export const currentEnv = 'prod'

//  let base_url = 'https://leuuydewi8.execute-api.us-east-2.amazonaws.com/'+env
//  return base_url

// export const baseUrl=(env)=>{
//     let baseUrlObj = {
//         base_url = 'https://leuuydewi8.execute-api.us-east-2.amazonaws.com/'+env
//     }
//      return baseUrlObj
//  }