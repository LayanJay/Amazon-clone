import CarouselComp from '../components/Carousel'
import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import Categories from '../modules/Categories'

export const getStaticProps = async () => {
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((res) => res.json())

  return {
    props: {
      categories,
    },
  }
}

const Home = ({ categories }) => {
  return (
    <Layout>
      <Container>
        <section className='relative'>
          <CarouselComp />
          <div className='absolute top-1/2 sm:px-4 w-full'>
            <Categories categories={categories} />
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default Home
