import { useEffect, useState, memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdDelete } from 'react-icons/md'
import { useCartState } from '../context/cart'
import { useAuth } from '../hooks/auth'
import { addToCart } from '../lib/firebase/cart'

const LineItem = ({ item }) => {
  const { id, title, price, image } = item
  const [randomVal, setRandomVal] = useState(50)
  const state = useCartState()
  const user = useAuth()

  const removeItem = async (productId) => {
    const lineItems = state.line_items.filter((item) => item.id !== productId)
    const items = { ...state, line_items: [...lineItems] }
    await addToCart(items, user)
  }

  const randomValue = useCallback(() => {
    const multiplier = 100
    const value = Math.floor(Math.random() * multiplier)
    return value
  }, [])

  useEffect(() => {
    const value = randomValue()
    setRandomVal(value)
  }, [randomValue])

  return (
    <div className='grid grid-rows-1 grid-cols-4 md:grid-cols-5 gap-4 p-4 border-b-2 border-gray-200'>
      <div className='col-span-1 flex items-center justify-center'>
        {image && (
          <Link href={`/products/${id}`}>
            <a>
              <div>
                <Image
                  src={image}
                  alt={title}
                  layout='intrinsic'
                  width={70}
                  height={70}
                />
              </div>
            </a>
          </Link>
        )}
      </div>
      <div className='col-span-3 md:col-span-4 grid grid-rows-1 grid-cols-1 md:grid-cols-8 gap-1 md:gap-4'>
        <div className='col-span-1 md:col-span-4 flex items-center max-w-md'>
          <Link href={`/products/${id}`}>
            <a className='hover:text-yellow-700 transition ease-in'>
              <h2 className='font-medium sm:text-lg'>{title}</h2>
            </a>
          </Link>
        </div>
        <div className='md:col-span-3 flex items-center'>
          <span className='text-xl sm:text-2xl text-yellow-700'>${price}</span>
          <span className='ml-2 text-gray-700'>+ ${randomVal} shipping</span>
        </div>
        <div className='flex items-center'>
          <button
            onClick={() => removeItem(id)}
            className='py-2 px-4 bg-gray-200 hover:bg-gray-300 border-2 focus:border-gray-700 rounded-md transition ease-in'
          >
            <MdDelete className='sm:text-xl text-gray-700' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(LineItem)
