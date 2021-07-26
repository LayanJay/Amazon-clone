import Image from 'next/image'
import Link from 'next/link'

const Category = ({ category }) => {
  let image
  if (category === 'electronics') {
    image = 'electronics.png'
  } else if (category === 'jewelery') {
    image = 'jewelery.png'
  } else if (category === "men's clothing") {
    image = 'men-fashion.png'
  } else if (category === "women's clothing") {
    image = 'women-fashion.png'
  }
  return (
    <div className='max-w-sm bg-white px-5 py-4'>
      <h2 className='font-semibold text-lg sm:text-xl capitalize mb-3'>
        {category}
      </h2>
      <div className='flex justify-center mb-3'>
        <Link href={`/categories/${category}`}>
          <a>
            <Image
              src={`/categories/${image}`}
              alt={category}
              layout='intrinsic'
              width={304}
              height={304}
            />
          </a>
        </Link>
      </div>
      <Link href={`/categories/${category}`}>
        <a>
          <p className='text-xs sm:text-sm text-blue-600 hover:text-yellow-900 hover:underline transition ease-in'>
            See more
          </p>
        </a>
      </Link>
    </div>
  )
}

export default Category
