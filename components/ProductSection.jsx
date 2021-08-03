import Product from './Product'

const ProductSection = ({ products, title }) => {
  return (
    <>
      <h2 className='font-semibold text-lg sm:text-xl capitalize mb-3'>
        {title}
      </h2>
      <section className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mb-8'>
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}

export default ProductSection
