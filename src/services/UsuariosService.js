export const GetAll = async () => {
  const response = await fetch(`/api/carteiras`);
  const data = await response.json();
  return data;
};
