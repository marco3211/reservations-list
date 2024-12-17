import { api } from "./setup.js";

// Function to fetch processed data
export const fetchProcessedData = async () => {
  try {
    const response = await api.get("/api/reservations");
    return response.data;
  } catch (error) {
    console.error("Error fetching processed data:", error);
    throw error;
  }
};
