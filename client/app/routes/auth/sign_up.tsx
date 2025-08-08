import React from 'react'
import AuthForm from '~/components/AuthForm'

const SignUp = async () => {

  return (
    <section className="flex justify-center items-center max-sm:mx-6">
      <AuthForm  type="sign-up" />
    </section>
  )
}

export default SignUp