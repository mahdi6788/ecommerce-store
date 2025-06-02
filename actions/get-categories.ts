import { CategoryType } from "@/lib/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async ():Promise<CategoryType[]> => {
  const res = await fetch(URL);
  return res.json();
};
