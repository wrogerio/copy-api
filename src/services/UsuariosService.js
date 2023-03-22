export const GetAll = async () => {
  const response = await fetch(`/api/usuarios`);
  const data = await response.json();
  return data;
};
