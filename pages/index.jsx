import CarouselComp from '../components/Carousel'
import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import Categories from '../modules/Categories'
import ProductSection from '../components/ProductSection'

export const getStaticProps = async () => {
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((res) => res.json())

  const allProducts = await fetch(
    'https://fakestoreapi.com/products?limit=12'
  ).then((res) => res.json())

  return {
    props: {
      categories,
      allProducts,
    },
  }
}

const Home = ({ categories, allProducts }) => {
  return (
    <Layout>
      <Container>
        <section className='relative'>
          <CarouselComp />
          <div className='absolute top-2/3 sm:top-1/2 sm:px-4 w-full bg-gradient-to-t from-gray-100 via-gray-100 to-transparent'>
            <div>
              <Categories categories={categories} />
            </div>
            <div>
              <ProductSection
                title="Shop Men's Clothing"
                products={allProducts.slice(0, 4)}
              />
            </div>
            <div>
              <ProductSection
                title='Shop From Top Sellers'
                products={allProducts.slice(4, 8)}
              />
            </div>
            <div>
              <ProductSection
                title='Shop Electronic Items'
                products={allProducts.slice(8, 12)}
              />
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default Home
