import { API_ENDPOINT } from "./global";

//Body for adding seva
const sevaData = {
  name: "Seva Name",
  description: "Seva Description",
  dep_id: "Department ID",
  leader: "Seva Leader",
  date: "Seva Date",
  start_time: "Start Time",
  end_time: "End Time",
  banner: "Seva Banner",
  seva_status: "Seva Status",
  is_aceepting_seva: "Accepting Seva",
};

export const addSeva = async (sevaData) => {
  try {
    console.log("Adding seva...");
    const response = await fetch(`${API_ENDPOINT}addseva`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sevaData),
    });

    if (!response.ok) {
      throw new Error("Failed to add seva");
    }

    const responseData = await response.json();
    console.log("Seva added successfully:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error adding seva:", error.message);
    throw error;
  }
};

export const updateSeva = async (sevaId, updatedSevaData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}updateSeva/${sevaId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSevaData),
    });

    if (!response.ok) {
      throw new Error("Failed to update Seva");
    }

    const responseData = await response.json();
    console.log(responseData.message); // Log the response message
    return responseData; // You can return the response data if needed
  } catch (error) {
    console.error("Error updating Seva:", error.message);
    throw error;
  }
};

export const deleteSeva = async (sevaId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}deleteSeva/${sevaId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete Seva with ID ${sevaId}`);
    }

    const responseData = await response.json();
    console.log(responseData.message); // Log the response message
    return responseData; // You can return the response data if needed
  } catch (error) {
    console.error("Error deleting Seva:", error.message);
    throw error;
  }
};

export const getSevaByDeptId = async (deptId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}getsevabydept/${deptId}`);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve Seva data for department with ID ${deptId}`
      );
    }

    const sevaData = await response.json();
    console.log(sevaData); // Log the retrieved Seva data
    return sevaData; // Return the Seva data if needed
  } catch (error) {
    console.error("Error fetching Seva data by department ID:", error.message);
    throw error;
  }
};

const startDate = "2024-04-15"; // Example start date
const endDate = "2024-04-30"; // Example end date (optional)
export const getSevaByStartDate = async (startDate, endDate = null) => {
  try {
    let apiUrl = `${API_ENDPOINT}sevabydate?start_date=${startDate}`;
    if (endDate) {
      apiUrl += `&end_date=${endDate}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve Seva data for start date ${startDate}`
      );
    }

    const responseData = await response.json();
    console.log(responseData); // Log the retrieved Seva data
    return responseData.seva_data; // Return the Seva data if needed
  } catch (error) {
    console.error("Error fetching Seva data by start date:", error.message);
    throw error;
  }
};

export const getSevaWithMembers = async (sevaId) => {
  try {
    const apiUrl = `${API_ENDPOINT}getSevaWithMembers/${sevaId}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to retrieve Seva with members data for ID ${sevaId}`
      );
    }

    const responseData = await response.json();
    console.log(responseData); // Log the retrieved Seva with members data
    return responseData; // Return the Seva with members data if needed
  } catch (error) {
    console.error("Error fetching Seva with members data:", error.message);
    throw error;
  }
};

export const getAllSeva = async () => {
  try {
    console.log("Fetching all seva...");
    const response = await fetch(`${API_ENDPOINT}getallseva`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch all seva");
    }

    const data = await response.json();
    console.log("All seva data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching all seva:", error.message);
    throw error;
  }
};

export const getUserSpecificData = async (userId) => {
  try {
    const apiUrl = `${API_ENDPOINT}user_specific_data/${userId}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch user-specific data for user ID ${userId}`
      );
    }

    const responseData = await response.json();
    console.log(responseData); // Log the response data
    return responseData; // Return the user-specific data if needed
  } catch (error) {
    console.error("Error fetching user-specific data:", error.message);
    throw error;
  }
};
