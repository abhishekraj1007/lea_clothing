import axios from "axios";
import { BASE_API_URL } from "/globalVariables";

const getRecommendation = async ({ ...finalQuizData }) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/personalize`, {
      finalQuizData: {
        ...finalQuizData,
      },
    });

    return response.data;
  } catch (e) {
    console.log("error", e);
    if (!axios.isCancel(e)) {
      throw e;
    }
  }
  return {};
};

const LeaQuizApi = {
  getRecommendation,
};

export default LeaQuizApi;
