import Head from 'next/head'
import Nav from './Nav'

const Layout = ({
  children,
  title = 'Amazon.com. Spend less. Smile more.',
  bgColor,
  minHeight = '80vh',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <main
        style={{ minHeight: minHeight }}
        className={`font-roboto ${bgColor}`}
      >
        {children}
      </main>
    </>
  )
}

export default Layout
