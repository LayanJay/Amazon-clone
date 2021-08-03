import { useRouter } from 'next/router'
import { auth } from '../lib/firebase'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import Layout from '../components/common/Layout'

const Logout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    await auth
      .signOut()
      .then(() => router.push('/login'))
      .catch((error) => alert(`Error: ${error.message}`))
  }

  return (
    <Layout>
      <Container>
        <section
          style={{ minHeight: '60vh' }}
          className='flex justify-center items-center h-full py-10'
        >
          <div className='max-w-xl border-2 border-gray-300 rounded-md shadow p-4'>
            <h1 className='font-semibold text-3xl sm:text-4xl text-center mb-2'>
              Logout
            </h1>
            <p className='text-gray-500 text-center mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              purus quam, vehicula ac malesuada vel, aliquam vel lectus.
            </p>
            <Button onClick={handleLogout} width='w-full'>
              Logout
            </Button>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default Logout
