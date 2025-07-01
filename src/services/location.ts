import axios from "axios";

export interface Province {
  code: string;
  name: string;
}

export interface District {
  code: string;
  name: string;
  provinceCode: string;
}

export const getProvinces = async (): Promise<Province[]> => {
  const response = await axios.get("/provinces");
  return response.data;
};

export const getDistricts = async (
  provinceCode: string
): Promise<District[]> => {
  const response = await axios.get(`/districts?provinceCode=${provinceCode}`);
  return response.data;
};
