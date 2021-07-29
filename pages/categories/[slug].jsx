import Container from '../../components/common/Container'
import Layout from '../../components/common/Layout'
import Product from '../../components/Product'
import SidePanel from '../../components/SidePanel'

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const queryRelatedProducts = (slug) => {
    if (slug === 'electronics') {
      return 'jewelery'
    } else if (slug === 'jewelery') {
      return 'electronics'
    } else if (slug === "men's clothing") {
      return "women's clothing"
    } else if (slug === "women's clothing") {
      return "men's clothing"
    }
  }

  const url = `https://fakestoreapi.com/products/category/${slug}`
  const relatedUrl = `https://fakestoreapi.com/products/category/${queryRelatedProducts(
    slug
  )}`

  const products = await fetch(url).then((res) => res.json())
  const relatedProducts = await fetch(relatedUrl).then((res) => res.json())
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((res) => res.json())

  return {
    props: {
      products,
      categories,
      slug,
      relatedProducts,
    },
  }
}

export const getStaticPaths = async () => {
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((res) => res.json())

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category,
      },
    })),
    fallback: false,
  }
}

const SingleCategoryPage = ({
  products,
  categories,
  slug,
  relatedProducts,
}) => {
  const strToCaptilize = (str) => {
    if (str === 'electronics') {
      return 'Electronics'
    } else if (str === 'jewelery') {
      return 'Jewelery'
    } else if (str === "men's clothing") {
      return "Men's Clothing"
    } else if (str === "women's clothing") {
      return "Women's Clothing"
    }
  }

  return (
    <Layout
      title={`${strToCaptilize(slug)} | Amazon.com`}
      bgColor='bg-gray-100'
    >
      <Container>
        <section className='grid grid-cols-1 md:grid-cols-5 gap-4 py-10'>
          <SidePanel
            categories={categories}
            relatedProducts={relatedProducts}
          />
          <section className='md:col-span-5 lg:col-span-4'>
            <h2 className='capitalize font-semibold text-2xl sm:text-3xl mb-1'>
              {slug}
            </h2>
            <p className='text-sm sm:text-base text-gray-600 mb-5'>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document
            </p>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </section>
          </section>
        </section>
      </Container>
    </Layout>
  )
}

export default SingleCategoryPage
