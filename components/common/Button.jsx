const Button = ({ type = 'button', onClick = null, children }) => {
  return (
    <button
      className='py-2 px-6 bg-gradient-to-t from-yellow-300 hover:from-yellow-400 to-yellow-200 border border-yellow-900 rounded-md text-gray-900'
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
