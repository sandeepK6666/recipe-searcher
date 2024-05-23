import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  config => {
    // Add authentication token or other headers here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  response => {
    // Any status code that lies within the range of 2xx causes this function to trigger
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    // Handle errors globally
    if (error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized access - maybe redirect to login');
    } else if (error.response.status === 500) {
      // Handle server errors
      console.error('Server error - notify user');
    }
    return Promise.reject(error);
  }
);

export default api;
