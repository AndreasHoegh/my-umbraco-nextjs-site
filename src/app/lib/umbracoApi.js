import axios from "axios";

const apiUrl = "https://localhost:44342/umbraco/delivery/api/v2/content";

export const fetchContent = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
};
