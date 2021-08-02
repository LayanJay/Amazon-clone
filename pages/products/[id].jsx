import Image from 'next/image'
import Link from 'next/link'
import Button from '../../components/common/Button'
import Container from '../../components/common/Container'
import Layout from '../../components/common/Layout'

export const getStaticProps = async ({ params }) => {
  const { id } = params

  const url = `https://fakestoreapi.com/products/${id}`

  const productData = await fetch(url).then((res) => res.json())

  return {
    props: {
      productData,
    },
  }
}

export const getStaticPaths = async () => {
  const url = `https://fakestoreapi.com/products`

  const products = await fetch(url).then((res) => res.json())

  return {
    paths: products.map((product) => ({
      params: {
        id: JSON.stringify(product.id),
      },
    })),
    fallback: false,
  }
}

const SingleProductPage = ({ productData }) => {
  const { price, title, description, category, image } = productData

  const randomValue = () => {
    const multiplier = 100
    const value = Math.floor(Math.random() * multiplier)
    return value
  }
  return (
    <Layout title={`${title} | Amazon.com`}>
      <Container>
        <section className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-5 place-items-center select-none py-10 sm:py-20 lg:py-28'>
          <div className='md:col-span-1'>
            <div className='flex justify-center max-w-xs mx-auto sm:max-w-none mb-3'>
              <Image
                src={image}
                alt={title}
                layout='intrinsic'
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className='md:col-span-1 flex flex-col justify-center items-start'>
            <Link href={`/categories/${category}`}>
              <a>
                <p className='capitalize font-medium text-sm text-blue-600 hover:text-yellow-600 transition ease-in mb-2'>
                  {category}
                </p>
              </a>
            </Link>

            <h1 className='font-medium text-2xl sm:text-3xl mb-1'>{title}</h1>
            <p className='text-blue-600 hover:text-yellow-600 hover:underline transition ease-in cursor-pointer mb-5'>
              Visit the shop
            </p>

            <div className='inline-flex space-x-5'>
              <p className='text-yellow-900'>Price</p>
              <div className='relative text-red-700 mb-3'>
                <span className='absolute top-1 -left-2 text-xs font-semibold'>
                  $
                </span>
                <span className='text-lg sm:text-xl'>{price}</span>
                <span className='ml-2'>+ ${randomValue()} shipping</span>
              </div>
            </div>

            <div>
              <h3 className='font-medium text-lg sm:text-xl mb-3'>
                About this item
              </h3>
              <p className='text-gray-700 max-w-xl mx-auto mb-6'>
                {description}
              </p>
            </div>

            <div>
              <p className='text-green-800 font-medium mb-3'>In Stock</p>
              <Button padding='py-1 px-4'>Add to cart</Button>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default SingleProductPage
