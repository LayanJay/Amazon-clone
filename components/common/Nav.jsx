import brand from '../../public/amazon-header.png'
import Image from 'next/image'
import Link from 'next/link'
import { TiLocation } from 'react-icons/ti'
import { IoIosSearch } from 'react-icons/io'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Button from '../common/Button'

const Nav = () => {
  return (
    <div className='sticky top-0 left-0 right-0 z-10 font-roboto bg-gray-900 px-4'>
      <div className='grid grid-cols-3 md:grid-cols-4 grid-rows-1 gap-4'>
        <div className='md:col-span-1 col-span-1 flex items-center justify-between space-x-3'>
          <div className='w-20 sm:w-24 pt-4 pb-1'>
            <Link href='/'>
              <a>
                <Image
                  src={brand}
                  alt='amazon brand logo'
                  layout='intrinsic'
                  placeholder='blur'
                />
              </a>
            </Link>
          </div>
          <div className='lg:flex hidden items-center justify-center space-x-2'>
            <TiLocation className='text-white text-2xl' />
            <div className='text-white text-sm flex flex-col flex-grow'>
              <div className='text-xs'>Deliver to</div>
              <div className='font-bold'>Sri Lanka</div>
            </div>
          </div>
        </div>

        <div className='md:col-span-2 md:flex items-center hidden'>
          <input
            type='text'
            className='w-full rounded-md placeholder-gray-400'
            placeholder='Search'
          />
          <Button padding='py-2 px-3'>
            <IoIosSearch className='text-2xl' />
          </Button>
        </div>
        <div className='md:col-span-1 col-span-2 flex items-center justify-end space-x-2'>
          <div className='text-white text-sm flex flex-col'>
            <div className='text-xs'>Hello, Sign in</div>
            <div className='font-bold truncate'>Layan Jayasinghe</div>
          </div>
          <div className='inline-flex flex-row items-center space-x-2'>
            <div className='relative'>
              <HiOutlineShoppingCart className='text-4xl sm:text-5xl text-white' />
              <p className='absolute top-0 right-0 font-semibold text-white bg-gray-600 py-0.5 px-1.5 text-xs rounded-full'>
                0
              </p>
            </div>
            <div className='text-sm font-semibold text-white '>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
