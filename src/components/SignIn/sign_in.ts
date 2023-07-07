import { NavigateFunction } from "react-router-dom";

interface credentials {
  username_or_email: string;
  password: string;
}

export const sign_in = (credentials: credentials, nav: NavigateFunction ) => {
  fetch("http://localhost:8080/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        localStorage.setItem("user", data);
        nav("/home");
      }
    });
};
