/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { z } from "zod"
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

import type { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '~/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string,
  className: string
}

const CustomInput = ({ control, name, label, placeholder, className }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className={`flex flex-col gap-2 ${className}`}>
          <FormLabel className="form-label">
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="w-full"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput