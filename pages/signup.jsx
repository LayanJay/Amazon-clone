import { useRouter } from 'next/router'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import Button from '../components/common/Button'
import Container from '../components/common/Container'
import InputField from '../components/common/InputField'
import Layout from '../components/common/Layout'
import { auth } from '../lib/firebase'

const SignupPage = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({ email, password }) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => router.push('/'))
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
              Sign Up
            </h1>
            <p className='text-gray-500 text-center mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              purus quam, vehicula ac malesuada vel, aliquam vel lectus.
            </p>
            <form className='mb-6' onSubmit={handleSubmit(onSubmit)}>
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
                  minLength: {
                    value: 6,
                    message: 'Password is too short',
                  },
                }}
                errors={errors}
              />
              <Button type='submit' width='w-full'>
                Submit
              </Button>
            </form>
            <div className='inline-flex space-x-2'>
              <p>Already have an account?</p>
              <Link href='/login'>
                <a className='font-medium text-blue-600 hover:underline'>
                  Login
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default SignupPage
