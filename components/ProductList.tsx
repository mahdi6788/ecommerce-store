import { ProductType } from "@/lib/types";
import NoResults from "@/components/NoResults";
import ProductCard from "@/components/ProductCard";

export default function ProductList({
  title,
  products,
}: {
  title: string;
  products: ProductType[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
