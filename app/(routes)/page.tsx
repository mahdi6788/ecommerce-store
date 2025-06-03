import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import Container from "@/components/Container";
import ProductList from "@/components/ProductList";

export default async function PageStore() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("989a5611-4409-4590-94df-ea7fada3cc3b");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
}
