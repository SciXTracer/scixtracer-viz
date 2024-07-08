import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;

export async function getData(dataset_uri: string, data_uri: string) {
    try {
      const url = '/datasets/' + dataset_uri + '/data/' + data_uri  
      const response = await axios.get(url);
      console.log(response);
      return response.data
    } catch (error) {
      console.error(error);
    }
}
