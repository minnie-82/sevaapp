import React, { useState, useContext } from "react";
import { API_ENDPOINT } from "../global";

export const addUser = async (newUserData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    });

    const responseData = await response.json();

    if (response.ok) {
      // User added successfully
      console.log(responseData.message);
      // You can handle the success response here
    } else if (response.status === 400) {
      // Failed to add user
      console.log(responseData.message);
      // You can handle the failure response here
    } else {
      // Handle other status codes if needed
      console.log("Unexpected error:", responseData.message);
    }
  } catch (error) {
    // Network error or other issues
    console.error("Error adding user:", error);
    // You can handle errors here
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_ENDPOINT}deleteUser/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to delete user");
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export const updateUser = async (userId, updateData) => {
  try {
    const response = await fetch(`${API_ENDPOINT}updateUser/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("Failed to update user");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
