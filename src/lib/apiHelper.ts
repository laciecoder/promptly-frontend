import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  console.log({ email, password });
  const res = await axios.post("/user/login", { email, password });
  console.log({ res });
  if (res.status !== 200) {
    throw new Error("Unable to Login");
  }
  const data = await res.data;
  console.log("data", { data });
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { email, password, name });
  if (res.status !== 201) {
    throw new Error("Unable to signup");
  }
  const data = await res.data;
  return data;
};

export const checkAuthStatus = async () => {
  const res = await axios.get("/user/auth-status");
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  const data = await res.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const res = await axios.post("/chats/new", { message });
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const getUserChats = async () => {
  const res = await axios.get("/chats/all-chats");
  if (res.status !== 200) {
    throw new Error("Unable to send chat");
  }
  const data = await res.data;
  return data;
};

export const deleteUserChats = async () => {
  const res = await axios.delete("/chats/delete");
  if (res.status !== 200) throw new Error("Unable to delete chat");
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) throw new Error("Unable to logout");
  const data = await res.data;
  return data;
};
