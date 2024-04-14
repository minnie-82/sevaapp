import { API_ENDPOINT } from "./global";

//please recommend api documentation
// await addSevaMember('seva_id_value', 'user_id_value', true, false);
export const addSevaMember = async (
  sevaId,
  userId,
  isInterested,
  isApproved
) => {
  try {
    const apiUrl = `${API_ENDPOINT}add_seva_members`;
    const requestData = {
      seva_id: sevaId,
      user_id: userId,
      is_interested: isInterested,
      is_approved: isApproved,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Failed to add seva member");
    }

    return true; // Return true if the operation was successful
  } catch (error) {
    console.error("Error adding seva member:", error.message);
    throw error;
  }
};

// await updateSevaMember('seva_member_id_value', true);
export const updateSevaMember = async (sevaMemberId, isApproved) => {
  try {
    const apiUrl = `${API_ENDPOINT}update_seva_member/${sevaMemberId}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ is_approved: isApproved }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update seva member with ID ${sevaMemberId}`);
    }

    return true; // Return true if the operation was successful
  } catch (error) {
    console.error("Error updating seva member:", error.message);
    throw error;
  }
};

// await getSevaMemberById(sevaMemberId);
export const getSevaMemberById = async (sevaMemberId) => {
  try {
    const apiUrl = `${API_ENDPOINT}getsevadata/${sevaMemberId}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch seva member with ID ${sevaMemberId}`);
    }

    const responseData = await response.json();
    return responseData; // Return the seva member data
  } catch (error) {
    console.error("Error fetching seva member:", error.message);
    throw error;
  }
};

export const deleteSevaMember = async (sevaMemberId) => {
  try {
    const apiUrl = `${API_ENDPOINT}seva_members/${sevaMemberId}`;

    const response = await fetch(apiUrl, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete seva member with ID ${sevaMemberId}`);
    }

    return true; // Return true if the operation was successful
  } catch (error) {
    console.error("Error deleting seva member:", error.message);
    throw error;
  }
};
