const InputField = ({
  label,
  name,
  type = 'text',
  wrapperStyles = '',
  placeholder,
  register,
  validation,
  errors,
}) => {
  return (
    <div className={`relative ${wrapperStyles}`}>
      <input
        id={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
        className='peer h-12 block w-full rounded-md border-gray-500 border-opacity-50 shadow-sm focus:outline-none focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-transparent'
      />
      <label
        htmlFor={name}
        className='absolute left-0 -top-6 text-gray-600 text-sm transition-all ease-out peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-gray-600 peer-focus:text-sm cursor-text'
      >
        {label}
      </label>
      {errors[name] && (
        <p className='absolute right-0 text-xs text-red-600'>
          {errors[name].message}
        </p>
      )}
    </div>
  )
}

export default InputField
