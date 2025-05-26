import axios from 'axios';

const API_URL = 'http://localhost:5000/api/send-email';

export const sendMail = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
