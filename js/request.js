import { loading } from "./loading.js";

export const getData = async (url) => {
  try {
    loading(true);
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error("Nimadir noto'g'ri ketdi? Oma Uzr!");
    }
    const response = await request.json();

    loading(false);
    return response;
  } catch (error) {
    loading(false);
    return error.message;
  }
};
