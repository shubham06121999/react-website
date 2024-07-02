import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

class ApiClient {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(url) {
    const response = await this.axiosInstance.get(url);
    return response.data;
  }

  async post(url, data) {
    const response = await this.axiosInstance.post(url, data);
    return response.data;
  }

  async put(url, data) {
    const response = await this.axiosInstance.put(url, data);
    return response.data;
  }

  async delete(url) {
    const response = await this.axiosInstance.delete(url);
    return response.data;
  }
}

export const apiClient = new ApiClient(apiUrl);
