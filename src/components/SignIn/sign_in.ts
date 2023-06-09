// TODO: Sign in function

export const sign_in = (credentials: any) => {
  fetch("http://localhost:8080/api/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
