import { CustomPagination } from '@/components/custom/CustomPagination'
import { products } from '@/mocks/products.mocks';
import { CustomJumboTron } from '@/shop/components/CustomJumboTron';
import { ProductsGrid } from '@/shop/components/ProductsGrid'
import { useParams } from 'react-router';

export const GenderPage = () => {
  const {gender} = useParams();
  const genderLabel = gender === 'men' ? 'Hombre' : ( gender === 'women' ? 'Mujer' : 'Niños');
  return (
    <>
      <CustomJumboTron
        title= {`Productos para ${genderLabel}`}
      />
      {/* Products Grid */}
      <ProductsGrid products={products} />
      <CustomPagination totalPages={5} />
    </>
  )
}
