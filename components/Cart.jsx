import { useEffect, useState } from 'react'
import Button from './common/Button'
import LineItem from './LineItem'

const Cart = ({ items }) => {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let value = 0
    for (let i = 0; i < items.length; i++) {
      value = value + items[i].price
      setTotal(value)
    }
  }, [items])

  return (
    <div className='shadow-sm rounded-md border-2 border-gray-200 p-3 sm:p-4'>
      <div className='mb-4'>
        {items.map((item, i) => (
          <LineItem key={i} item={item} />
        ))}
      </div>
      <div className='flex flex-col items-end'>
        <p className='font-medium text-lg sm:text-xl'>Sub Total</p>
        <p className='font-light text-3xl sm:text-4xl mb-5'>
          {total.toFixed(2)}
        </p>
        <Button padding='py-1 px-10'>Checkout</Button>
      </div>
    </div>
  )
}

export default Cart
