import axios from "axios";
import { BASE_API_URL } from "/globalVariables";
const baseUrl = "https://736f-2401-4900-1c36-1510-5672-41f8-18ee-b41c.in.ngrok.io";

const getUserData = async (emailId) => {
  // console.log("***", emailId);
  try {
    const response = await axios.get(
      `${BASE_API_URL}/check-user?email=${emailId}`
    );

    console.log("User Response:", response.data);
    return response.data;
  } catch (e) {
    console.log("error", e);
    if (!axios.isCancel(e)) {
      throw e;
    }
  }
  return {};
};

const UserDataApi = {
  getUserData,
};

export default UserDataApi;
