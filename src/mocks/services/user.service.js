export const getUserService = ({ authAxios }) => {
  return authAxios.request({
    method: "GET",
    url: "/user",
    baseURL: `http://localhost:3000/api-gw/:contextId/meta/customers/identity`,
  });
};
