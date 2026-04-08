import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const respose = await api.post("/api/auth/register", {
      username,
      email,
      password,
    });

    return respose.data;
  } catch (err) {
    console.log(err);
  }
}

export async function login({ email, password }) {
  try {
    const respose = await api.post("/api/auth/login", {
      email,
      password
    });

    return respose.data;
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  try {
    const respose = await api.post("/api/auth/logout");

    return respose.data;
  } catch (err) {

    console.log(err);
    
  }
}

export async function getMe() {
  try {
    const respose = await api.get("/api/auth/logout");

    return respose.data;
  } catch (err) {
    console.log(err);
  }
}

