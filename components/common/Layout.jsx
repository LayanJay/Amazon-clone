import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className='font-roboto bg-gray-100 min-h-screen'>{children}</main>
    </>
  )
}

export default Layout
