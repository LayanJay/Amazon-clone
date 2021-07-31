import Head from 'next/head'
import Nav from './Nav'

const Layout = ({
  children,
  title = 'Amazon.com. Spend less. Smile more.',
  bgColor,
  minHeight = 'min-h-screen',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <main className={`font-roboto ${bgColor} ${minHeight}`}>{children}</main>
    </>
  )
}

export default Layout
