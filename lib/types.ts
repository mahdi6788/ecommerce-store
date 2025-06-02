export interface BillboardType {
  id: string;
  label: string;
  imageUrl: string;
}

export interface CategoryType {
  id: string;
  name: string;
  billboard: BillboardType;
}
