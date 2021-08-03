import Category from '../components/Category'

const Categories = ({ categories }) => {
  return (
    <section className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mb-6'>
      {categories?.slice(0, 4).map((category, i) => (
        <Category key={i} category={category} />
      ))}
    </section>
  )
}

export default Categories
