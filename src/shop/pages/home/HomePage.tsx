import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mocks"
import { CustomJumboTron } from "@/shop/components/CustomJumboTron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePage = () => {
  return (
    <>
        <CustomJumboTron 
          title= "Todos los Productos"
        />
        {/* Products Grid */}
        <ProductsGrid products={products} />
        <CustomPagination totalPages={5} />
    </>
  )
}
