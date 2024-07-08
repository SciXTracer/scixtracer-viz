const endpoint = process.env.REACT_APP_API_ROOT

export async function getDatasets(){
    return fetch(endpoint+'/datasets')
      .then((response) => {return response.json()})
      .catch((err) => {
        console.log(err.message);
     });
};