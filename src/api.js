export const loginAPI = async (data) => {
  const response = await fetch("https://api.sirbenj.pro/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return res;
};

export const getCategoriesAPI = async () => {
  const response = await fetch("https://api.sirbenj.pro/api/categories/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const res = await response.json();
  return res;
};
