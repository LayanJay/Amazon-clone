import Container from '../../components/common/Container'
import Layout from '../../components/common/Layout'
import Product from '../../components/Product'

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const url = `https://fakestoreapi.com/products/category/${slug}`

  const products = await fetch(url).then((res) => res.json())

  return {
    props: {
      products,
      slug,
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

const SingleCategoryPage = ({ products, slug }) => {
  const strToCaptilize = (str) => {
    if (str === 'electronics') {
      return 'Electronics'
    } else if (str === 'jewelery') {
      return 'Jewelery'
    } else if (str === "men's clothing") {
      return "Men's clothing"
    } else if (str === "women's clothing") {
      return "Women's clothing"
    }
  }

  return (
    <Layout title={`${strToCaptilize(slug)} | Amazon.com`}>
      <Container>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
    </Layout>
  )
}

export default SingleCategoryPage
