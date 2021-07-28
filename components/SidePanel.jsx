import Link from 'next/link'
import RelatedProduct from './RelatedProduct'

const SidePanel = ({ categories, relatedProducts }) => {
  return (
    <aside className='md:border-r-2 md:border-gray-300 hidden lg:block px-2'>
      <h3 className='font-semibold sm:text-lg mb-4'>Department</h3>
      <div className='flex flex-col mb-4'>
        {categories.map((category, i) => (
          <Link key={i} href={category}>
            <a className='hover:text-yellow-600 transition ease-in capitalize'>
              {category}
            </a>
          </Link>
        ))}
      </div>
      <h3 className='font-semibold sm:text-lg mb-4'>Related Products</h3>
      <div className='flex flex-col space-y-2'>
        {relatedProducts.map((item) => (
          <RelatedProduct key={item.id} product={item} />
        ))}
      </div>
    </aside>
  )
}

export default SidePanel
