import Image from 'next/image'
import Link from 'next/link'

const Cart = ({ isItems }) => {
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
          {isItems ? `Your Shopping Cart` : `Your Amazon Cart is empty`}
        </h3>
        <Link href='/'>
          <a>
            <p className='text-sm text-blue-500 hover:text-blue-600 hover:underline cursor-pointer transition mb-3'>
              Shop today&apos;s deals
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Cart
