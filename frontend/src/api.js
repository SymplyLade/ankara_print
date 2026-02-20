const API_BASE_URL = (import.meta.env.VITE_API_URL || "https://ankara-print.onrender.com").replace(/\/+$/, "");
const API_PREFIX = `${API_BASE_URL}/api`;

const toErrorMessage = (data) => {
  if (!data) return "Request failed";
  if (typeof data.detail === "string") return data.detail;
  if (typeof data.error === "string") return data.error;
  if (typeof data.message === "string") return data.message;
  return "Request failed";
};

const parseResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(toErrorMessage(data));
  }
  return data;
};

export const signupUser = async (userData) => {
  const res = await fetch(`${API_PREFIX}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return parseResponse(res);
};

export const loginUser = async (userData) => {
  const res = await fetch(`${API_PREFIX}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return parseResponse(res);
};

export const resetPassword = async (email) => {
  const res = await fetch(`${API_PREFIX}/auth/reset-password?email=${encodeURIComponent(email)}`, {
    method: "POST",
  });

  return parseResponse(res);
};
