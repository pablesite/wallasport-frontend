// Listo
import React, { useState } from 'react';
import { FormProvider } from '../Context/Form'


export default function FormEnhanced(props) {

  const { initialState, handleSubmit } = props;

  const [state, setState] = useState({ ...initialState });

  const handleSubmit1 = (e) => {
    e.preventDefault()
    handleSubmit(state)
  }

  const onInputChange = (name, value) => {
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit1}  >
      <FormProvider value={{ state: state, onInputChange: onInputChange }} >
        {props.children}
      </FormProvider>
    </form>
  )
}
