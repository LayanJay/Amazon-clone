import Head from 'next/head'
import Nav from './Nav'

const Layout = ({
  children,
  title = 'Amazon.com. Spend less. Smile more.',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <main className='font-roboto bg-gray-100 min-h-screen'>{children}</main>
    </>
  )
}

export default Layout
