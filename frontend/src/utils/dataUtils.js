import { fetchProcessedData } from "../api/products";

// Function to fetch data
export const fetchData = async (setData) => {
  try {
    const result = await fetchProcessedData();
    setData(result);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

// Function to toggle expanded rows
export const toggleRow = (reservationUUID, expandedRows, setExpandedRows) => {
  setExpandedRows((prevExpandedRows) =>
    prevExpandedRows.includes(reservationUUID)
      ? prevExpandedRows.filter((id) => id !== reservationUUID)
      : [...prevExpandedRows, reservationUUID]
  );
};

// Function to filter data based on the search term
export const filterData = (data, searchTerm) => {
  return data.filter((reservation) =>
    reservation.reservationUUID.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
