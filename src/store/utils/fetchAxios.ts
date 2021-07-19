import axios, { AxiosRequestConfig } from "axios";

const fetchAxios = {
  onPost: (api: string, payload: any, config?: AxiosRequestConfig) => {
    const response = axios
      .post(api, payload, config)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  onGet: (api: string, config?: AxiosRequestConfig) => {
    const response = axios
      .get(api, config)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  },

  onGetWithParams: (api: string, params: any, config?: AxiosRequestConfig) => {
    const response = axios.get(api, {
      ...config,
      params
    }).then((res) => {
      return res.data
    }).catch(error => {
      console.log(error)
    })

    return response;
  },

  onPut: (api: string, payload: any, config?: AxiosRequestConfig) => {
    const response = axios
      .put(api, payload, config)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  onDelete: (api: string, config?: AxiosRequestConfig) => {
    axios.delete(api).catch((error) => {
      return error;
    });
  }
};

export default fetchAxios;
