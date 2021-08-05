import LineItem from './LineItem'

const Cart = ({ items }) => {
  return (
    <div className='shadow-sm rounded-md border-2 border-gray-200 p-3 sm:p-4'>
      {items.map((item, i) => (
        <LineItem key={i} item={item} />
      ))}
    </div>
  )
}

export default Cart
