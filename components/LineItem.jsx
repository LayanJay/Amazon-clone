import { useEffect, useState, memo, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LineItem = ({ item }) => {
  const [product, setProduct] = useState(null)
  const [randomVal, setRandomVal] = useState(50)

  const randomValue = useCallback(() => {
    const multiplier = 100
    const value = Math.floor(Math.random() * multiplier)
    return value
  }, [])

  useEffect(() => {
    const fetchLineItem = async () => {
      const url = `https://fakestoreapi.com/products/${item}`

      const response = await fetch(url)
      const fetchedItem = await response.json()
      setProduct(fetchedItem)
    }
    fetchLineItem()
  }, [item])

  useEffect(() => {
    const value = randomValue()
    setRandomVal(value)
  }, [randomValue])

  return (
    <div className='grid grid-rows-1 grid-cols-3 sm:grid-cols-4 gap-4 p-4 border-b-2 border-gray-200'>
      <div className='col-span-1 flex items-center justify-center'>
        {product?.image && (
          <Link href={`/products/${product?.id}`}>
            <a>
              <div>
                <Image
                  src={product?.image}
                  alt={product?.title}
                  layout='intrinsic'
                  width={70}
                  height={70}
                />
              </div>
            </a>
          </Link>
        )}
      </div>
      <div className='col-span-2 sm:col-span-3 grid grid-rows-1 grid-cols-1 sm:grid-cols-4 gap-1 sm:gap-4'>
        <div className='col-span-1 sm:col-span-2 flex items-center max-w-md'>
          <Link href={`/products/${product?.id}`}>
            <a className='hover:text-yellow-700 transition ease-in'>
              <h2 className='font-medium sm:text-lg'>{product?.title}</h2>
            </a>
          </Link>
        </div>
        <div className='sm:col-span-1 flex items-center'>
          <span className='text-xl sm:text-2xl text-yellow-700'>
            ${product?.price}
          </span>
          <span className='ml-2 text-gray-700'>+ ${randomVal} shipping</span>
        </div>
        <div className='flex items-center'>
          <button>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default memo(LineItem)
