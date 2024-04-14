import { API_ENDPOINT } from "../global";

export const addAdmin = async (adminData) => {
  try {
    console.log("Adding admin...");
    const response = await fetch(`${API_ENDPOINT}addAdmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adminData),
    });

    if (!response.ok) {
      throw new Error("Failed to add admin");
    }

    const data = await response.json();
    console.log("Admin added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error adding admin:", error.message);
    throw error;
  }
};

export const updateAdmin = async (adminId, updatedAdminData) => {
  try {
    console.log(`Updating admin with ID ${adminId}...`);
    const response = await fetch(`${API_ENDPOINT}updateAdmin/${adminId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAdminData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update admin with ID ${adminId}`);
    }

    const data = await response.json();
    console.log("Admin updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error updating admin:", error.message);
    throw error;
  }
};

export const getAdmin = async (adminId) => {
  try {
    console.log(`Fetching admin with ID ${adminId}...`);
    const response = await fetch(`${API_ENDPOINT}getadmin/${adminId}`);

    if (!response.ok) {
      throw new Error(`Admin with ID ${adminId} not found`);
    }

    const data = await response.json();
    console.log("Admin data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching admin:", error.message);
    throw error;
  }
};

export const deleteAdmin = async (adminId) => {
  try {
    console.log(`Deleting admin with ID ${adminId}...`);
    const response = await fetch(`${API_ENDPOINT}deleteAdmin/${adminId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete admin with ID ${adminId}`);
    }

    const data = await response.json();
    console.log("Admin deletion response:", data);
    return data;
  } catch (error) {
    console.error("Error deleting admin:", error.message);
    throw error;
  }
};
