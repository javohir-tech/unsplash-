import React from 'react'

//react router dom
import { Form } from 'react-router-dom'

//component
import { FormInput } from '../Components/FormInput'


export default function Contact() {
  return (
    <div className='container py-3 px-1'>
      <h1 className='font-bold text-xl'>Biz Bilan Bog'laning </h1>
      <Form>
        <FormInput />
      </Form>

    </div>

  )
}
