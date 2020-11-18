export const baseUrl = "https://friends-app-strapi.herokuapp.com/";

export const config = {
  method: "get",
  url: `${baseUrl}users`,
  headers: {
    "Content-Type": "application/json",
  },
};
