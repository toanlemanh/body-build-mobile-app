import { rapidApiKey } from "../constants";
import axios from "axios";

const baseUrl = "https://exercisedb.p.rapidapi.com";
async function callRapidAPI(url, params) {
  try {
    const config = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (err) {
    console.error("error :", err.message);
  }
}

export const fetchBodyPartExercise = async (bodyPart) => {
  try {
    let data = await callRapidAPI(baseUrl + `/exercises/bodyPart/${bodyPart}`);
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
};
