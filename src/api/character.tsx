import instance from "./api";

export const getCharacters = async () => {
  const response = await instance.get("/character");
  return response.data;
};

export const getCharacter = async (id) => {
  const response = await instance.get(`/character/${id}`);
  return response.data;
};
