import apiClient from '../config/apiConfig';

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error || error.response?.data || { message: 'Something went wrong' };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error || error.response?.data || { message: 'Something went wrong' };
  }
};
