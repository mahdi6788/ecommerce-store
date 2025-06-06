import qs from "query-string";
import { ProductType } from "@/lib/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  colorId?: string;
  sizeId?: string;
  categoryId?: string;
  isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<ProductType[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
};
