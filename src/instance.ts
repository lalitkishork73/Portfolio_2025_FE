import axios from "axios";

const url: string | undefined =
  process.env.REACT_APP_API_URL ?? "http://localhost:5000";

const instance = async () => {
  try {
    return axios.create({
      baseURL: url,
    });
  } catch (error) {
    console.error("Error in instance:", error);
  }
};

export default instance;
