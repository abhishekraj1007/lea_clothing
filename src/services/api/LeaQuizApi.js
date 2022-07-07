import axios from "axios";
import { BASE_API_URL } from "/globalVariables";
const baseUrl = "https://736f-2401-4900-1c36-1510-5672-41f8-18ee-b41c.in.ngrok.io";

const getRecommendation = async ({ ...finalQuizData }) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/personalize`, {
      finalQuizData: {
        ...finalQuizData,
      },
    });

    console.log("Recomendation Response:", response.data);
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
