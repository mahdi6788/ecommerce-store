import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Filter from "@/components/category/Filter";
import MobileFilters from "@/components/category/MobileFilters";
import Container from "@/components/Container";
import NoResults from "@/components/NoResults";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryId: string }>;
  searchParams: { colorId: string; sizeId: string };
}) {
  const { categoryId } = await params;
  const products = await getProducts({
    categoryId: categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 md:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
            {/* Add Mobile Filters */}
            <MobileFilters sizes={sizes} colors={colors} />

            {/* Desktop Filter */}
            <div className="hidden sm:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div>
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
