import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  axios.create({
    baseURL: "https://build-week-africanmarketplace.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
};
