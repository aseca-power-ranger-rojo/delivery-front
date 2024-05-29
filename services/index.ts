import axios from "axios";

const API_URL= process.env.EXPO_PUBLIC_API_URL;

export const getOrders = async () => {
  const response = await axios.get(`${API_URL}/orders`);
  return response;
};

export const orderStatus = async (orderId: string, status: string) => {
  const response = await axios.patch(`${API_URL}/orders/${orderId}/${status}`);
  return response.data;
};

export const getDeliverer = async () => {
    const response = await axios.get(`${API_URL}/deliverers`);
    return response.data;
  };

export const addDeliverer = async (name: string, surname: string) => {
  const response = await axios.post(`${API_URL}/deliverers`, { name, surname });
  return response.data;
};