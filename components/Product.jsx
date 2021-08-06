import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from './common/Button'
import { useAuth } from '../hooks/auth'
import { useCartState } from '../context/cart'
import { addToCart } from '../lib/firebase/cart'

const Product = ({ product }) => {
  const { id, title, price, image } = product
  const user = useAuth()
  const router = useRouter()
  const state = useCartState()

  const [banner, setBanner] = useState(null)
  const [randomVal, setRandomVal] = useState(50)

  const handleAddToCart = async (product) => {
    if (!user) router.push('/login')
    else {
      const items = {
        ...state,
        line_items: [...state.line_items, { ...product }],
      }
      await addToCart(items, user)
    }
  }

  const randomValue = useCallback(() => {
    const multiplier = 100
    const value = Math.floor(Math.random() * multiplier)
    return value
  }, [])

  const showBestSellerBanner = useCallback(() => {
    const value = randomValue()
    if (value > 50) return true
  }, [randomValue])

  useEffect(() => {
    const show = showBestSellerBanner()
    const value = randomValue()
    setRandomVal(value)
    setBanner(show)
  }, [randomValue, showBestSellerBanner])

  return (
    <div className='max-w-sm bg-white px-5 py-4 w-full'>
      <div
        className={`w-24 bg-yellow-600 text-white px-2 py-0.5 mb-3 transform skew-y-3 ${
          banner ? `visible` : `invisible`
        }`}
      >
        <p className='text-center text-sm'>Best Seller</p>
      </div>
      <div className='flex justify-center mb-3'>
        <Link href={`/products/${id}`}>
          <a>
            <Image
              src={image}
              alt={title}
              layout='intrinsic'
              width={250}
              height={250}
            />
          </a>
        </Link>
      </div>
      <Link href={`/products/${id}`}>
        <a>
          <h2 className='capitalize text-sm sm:text-base mb-3'>{title}</h2>
        </a>
      </Link>

      <div className='relative mb-3'>
        <span className='absolute top-1 -left-2 text-xs font-semibold'>$</span>
        <span className='text-xl sm:text-2xl'>{price}</span>
        <span className='ml-2'>+ ${randomVal} shipping</span>
      </div>
      <div>
        <Button onClick={() => handleAddToCart(product)} padding='py-1 px-4'>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default Product
