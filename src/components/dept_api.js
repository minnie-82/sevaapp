import { API_ENDPOINT } from "./global";

export const addDepartment = async (departmentData) => {
  try {
    const apiUrl = `${API_ENDPOINT}addDept`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentData),
    });

    if (!response.ok) {
      throw new Error("Failed to add department");
    }

    const responseData = await response.json();
    console.log(responseData); // Log the response message
    return responseData; // Return the response data if needed
  } catch (error) {
    console.error("Error adding department:", error.message);
    throw error;
  }
};

// Similarly, define functions for update, get, and delete department

export const updateDepartment = async (departmentId, updatedData) => {
  try {
    const apiUrl = `${API_ENDPOINT}updateDept/${departmentId}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update department with ID ${departmentId}`);
    }

    const responseData = await response.json();
    console.log(responseData); // Log the response message
    return responseData; // Return the response data if needed
  } catch (error) {
    console.error("Error updating department:", error.message);
    throw error;
  }
};

// Define similar functions for get and delete department

// For getting department
export const getDepartment = async (departmentId) => {
  try {
    const apiUrl = `${API_ENDPOINT}getDept/${departmentId}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to get department with ID ${departmentId}`);
    }

    const responseData = await response.json();
    console.log(responseData); // Log the response data
    return responseData; // Return the department data if needed
  } catch (error) {
    console.error("Error getting department:", error.message);
    throw error;
  }
};

// For deleting department
export const deleteDepartment = async (departmentId) => {
  try {
    const apiUrl = `${API_ENDPOINT}deleteDept/${departmentId}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete department with ID ${departmentId}`);
    }

    const responseData = await response.json();
    console.log(responseData); // Log the response message
    return responseData; // Return the response data if needed
  } catch (error) {
    console.error("Error deleting department:", error.message);
    throw error;
  }
};
