import { useRouter } from 'next/router'
import Link from 'next/link'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import InputField from '../components/common/InputField'
import Layout from '../components/common/Layout'
import { auth } from '../lib/firebase'
import { useAuthState } from '../context/auth'
import Logout from '../components/common/Logout'

const LoginPage = () => {
  const router = useRouter()
  const user = useAuthState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formRef = useRef()

  const onSubmit = async ({ email, password }) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(`Error: ${error.message}`))
      .finally(() => {
        if (user) router.push('/')
      })
    formRef.current.reset()
  }

  if (user) {
    return <Logout />
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
              Login
            </h1>
            <p className='text-gray-500 text-center mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              purus quam, vehicula ac malesuada vel, aliquam vel lectus.
            </p>
            <form
              ref={formRef}
              className='mb-6'
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputField
                wrapperStyles='mb-7'
                label='Email'
                name='email'
                type='email'
                placeholder='Your Email'
                register={register}
                validation={{ required: 'Email is required' }}
                errors={errors}
              />
              <InputField
                wrapperStyles='mb-7'
                label='Password'
                name='password'
                type='password'
                placeholder='Password'
                register={register}
                validation={{
                  required: 'Password is required',
                }}
                errors={errors}
              />
              <Button type='submit' width='w-full'>
                Submit
              </Button>
            </form>
            <div className='inline-flex space-x-2'>
              <p>Don&apos;t have an account?</p>
              <Link href='/singup'>
                <a className='font-medium text-blue-600 hover:underline'>
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default LoginPage
