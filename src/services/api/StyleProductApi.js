import axios from "axios";
import { BASE_API_URL } from "/globalVariables";

const getAllStyles = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/get-styles`);

    return response.data;
  } catch (e) {
    console.log("error", e);
    if (!axios.isCancel(e)) {
      throw e;
    }
  }
  return {};
};

const updateStyle = async (newProductStyle) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/update-styles`, [
      ...newProductStyle,
    ]);

    return response.data;
  } catch (e) {
    console.log("error", e);
    if (!axios.isCancel(e)) {
      throw e;
    }
  }
  return {};
};

const StyleProductApi = {
  getAllStyles,
  updateStyle,
};

export default StyleProductApi;
