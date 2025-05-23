import axios from "@/api/Axios";
import { useCallback } from "react";

export type Payload = Record<string, any>;

export type URLParams = Record<string, string | number | boolean>;

const useAxios = () => {
  // GET request
  const getData = useCallback(
    async (url: string, params?: URLParams, baseURL?: string) => {
      try {
        const response = await axios.get(url, {
          params: {
            ...params,
          },
          baseURL,
        });
        return response.data;
      } catch (error) {
        console.error("Error in GET request:", error);
        throw error;
      }
    },
    []
  );

  // POST request
  const postData = useCallback(
    async (
      url: string,
      data: Payload,
      params?: URLParams,
      baseURL?: string
    ) => {
      try {
        const response = await axios.post(url, data, {
          params: {
            ...params,
          },
          baseURL,
        });
        return response.data;
      } catch (error) {
        console.error("Error in POST request:", error);
        throw error;
      }
    },
    []
  );

  return {
    getData,
    postData,
  };
};

export default useAxios;
