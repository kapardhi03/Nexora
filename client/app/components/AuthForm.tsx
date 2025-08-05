'use client';

import React, { useState } from 'react';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { authFormSchema } from '~/lib/utils';
import CustomInput from './CustomInput';

const AuthForm = ({ type }: { type: string }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: ''
      },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true);

      try {
        
        if(type === 'sign-up') {
          const userData = {
            firstName: data.firstName!,
            lastName: data.lastName!,
            email: data.email,
            password: data.password
          }

          let newUser;

          setUser(newUser);

          if(newUser) navigate('/');
        }

        if(type === 'sign-in') {
          let response;

          if(response) navigate('/');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <section className="flex w-[60vw] h-[70vh] border rounded-lg bg-white shadow-lg items-center justify-center flex-col mt-16">
      {user ? (
        <div className="flex flex-col gap-4">
          tests
        </div>
      ): (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[60vw] p-4">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4 w-[55vw">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name' className='w-full' />
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name' className='w-full' />
                  </div>
                </>
              )}

              <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email' className='w-full' />

              <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password' className='w-full' />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in' 
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
              ? "Don't have an account?"
              : "Already have an account?"}
            </p>
            <Link to={type === 'sign-in' ? '/auth/sign_up' : '/auth/sign_in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm