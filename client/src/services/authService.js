import api from "./api";

// Existing functions...

export const forgotPassword = async (email) => {
  const { data } = await api.post("/auth/forgot-password", {
    email,
  });

  return data;
};

export const resetPassword = async (
  token,
  password
) => {
  const { data } = await api.post(
    `/auth/reset-password/${token}`,
    {
      password,
    }
  );

  return data;
};