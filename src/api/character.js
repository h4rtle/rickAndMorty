import instance from "./instance";

const getCharacters = async () => {
  try {
    const response = await instance.get("/character");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getCharacters;
