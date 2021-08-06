import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Cart from '../components/Cart'
import CartMessage from '../components/CartMessage'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import Layout from '../components/common/Layout'
import RelatedProduct from '../components/RelatedProduct'
import { useCartState } from '../context/cart'
import { useAuth } from '../hooks/auth'

export const getStaticProps = async () => {
  const relatedUrl = `https://fakestoreapi.com/products/category/jewelery`

  const relatedProducts = await fetch(relatedUrl).then((res) => res.json())
  const categories = await fetch(
    'https://fakestoreapi.com/products/categories'
  ).then((res) => res.json())

  return {
    props: {
      categories,
      relatedProducts,
    },
  }
}

const EmptyCartMessage = () => {
  const router = useRouter()
  return (
    <div className='flex items-center space-x-6 shadow-sm rounded-md border-2 border-gray-200 p-3 sm:p-4 mb-3'>
      <div className='w-24 sm:w-32 md:w-40'>
        <Image
          src='/amazon-cart.png'
          alt='shopping cart'
          layout='intrinsic'
          width={300}
          height={300}
        />
      </div>

      <div>
        <h3 className='font-semibold text-xl sm:text-2xl mb-1'>
          Your Amazon Cart is empty
        </h3>
        <Link href='/'>
          <a>
            <p className='text-sm text-blue-500 hover:text-blue-600 hover:underline cursor-pointer transition mb-5'>
              Shop today&apos;s deals
            </p>
          </a>
        </Link>
        <Button onClick={() => router.push('/login')} padding={`py-1 px-3`}>
          Sign in to your account
        </Button>
      </div>
    </div>
  )
}

const CartPage = ({ categories, relatedProducts }) => {
  const user = useAuth()
  const { line_items } = useCartState()
  return (
    <Layout>
      <Container>
        <section className='mb-6'>
          <div className='mb-4'>
            <Image
              src='/amazon-cart-main.png'
              alt='amazon cart page advertisement'
              layout='intrinsic'
              width={1500}
              height={200}
            />
          </div>
          <section className='grid grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className='lg:col-span-3'>
              {user ? (
                <CartMessage isItems={line_items.length > 0} />
              ) : (
                <EmptyCartMessage />
              )}
              <Cart items={line_items} />
            </div>
            <aside className='lg:col-span-1 rounded-md shadow-sm border-2 border-gray-200 p-3 sm:p-4'>
              <h3 className='font-semibold sm:text-lg mb-4'>Departments</h3>
              <div className='flex flex-col mb-4'>
                {categories?.map((category, i) => (
                  <Link key={i} href={`/categories/${category}`}>
                    <a className='hover:text-yellow-600 transition ease-in capitalize'>
                      {category}
                    </a>
                  </Link>
                ))}
              </div>
              <h3 className='font-semibold sm:text-lg mb-4'>You may like</h3>
              <div className='flex flex-col space-y-2'>
                {relatedProducts?.map((item) => (
                  <RelatedProduct key={item.id} product={item} />
                ))}
              </div>
            </aside>
          </section>
        </section>
      </Container>
    </Layout>
  )
}

export default CartPage
