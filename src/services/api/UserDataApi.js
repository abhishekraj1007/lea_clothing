import axios from "axios";
import { BASE_API_URL } from "/globalVariables";

const getUserData = async (emailId) => {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/check-user?email=${emailId}`
    );

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
