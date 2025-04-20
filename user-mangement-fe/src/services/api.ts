import axiosInstance from "./axios-instance/axiose-instance";

// GET request
export const get = async <T>(url: string, params?: object): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error);
    throw error;
  }
};

// POST request
export const post = async <T>(url: string, data: object): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error);
    throw error;
  }
};

//Delete Request
export const del = async <T>(url: string): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error);
    throw error;
  }
};
