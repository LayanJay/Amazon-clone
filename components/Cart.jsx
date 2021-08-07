import { useEffect, useState } from 'react'
import { useCartState } from '../context/cart'
import { useAuth } from '../hooks/auth'
import { addToCart } from '../lib/firebase/cart'
import Button from './common/Button'
import LineItem from './LineItem'

const Cart = ({ items }) => {
  const user = useAuth()
  const state = useCartState()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let value = 0
    for (let i = 0; i < items.length; i++) {
      value = value + items[i].price
      setTotal(value)
    }
  }, [items])

  const handleCheckout = async () => {
    const obj = { ...state, checkoutToken: `check_${user.uid}` }
    await addToCart(obj, user)
    alert(
      'Your checkout token has been added to the database. Since the payments are handled externaly, there no gateway to handle payments. But you are free to implement it and test it out.'
    )
  }

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
        <Button onClick={handleCheckout} padding='py-1 px-10'>
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
