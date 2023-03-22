export const GetAll = async () => {
  const response = await fetch(`/api/usuarios`);
  const data = await response.json();
  return data;
};

export const GetItem = async (id) => {
  const response = await fetch(`/api/carteiras/add-or-edit/${id}`);
  const data = await response.json();
  return data;
};
