import Image from 'next/image'
import Link from 'next/link'

const RelatedProduct = ({ product }) => {
  const { id, title, image } = product
  return (
    <div className='max-w-xs grid grid-cols-3 gap-1 bg-white p-2'>
      <Link href={`/products/${id}`}>
        <a className='col-span-1 flex items-center justify-center'>
          <div>
            <Image
              src={image}
              alt={title}
              layout='intrinsic'
              width={50}
              height={50}
            />
          </div>
        </a>
      </Link>
      <Link href={`/products/${id}`}>
        <a className='col-span-2'>
          <h4 className='text-sm hover:text-yellow-600 transition ease-in'>
            {title}
          </h4>
        </a>
      </Link>
    </div>
  )
}

export default RelatedProduct
