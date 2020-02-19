import React, { useState } from 'react';
import { FormProvider } from '../Context/Form'


export default function FormEnhanced(props) {

  // Origin props of the component
  const { initialState, handleSubmit } = props;

  const [state, setState] = useState({ ...initialState });

  const onInputChange = (name, value) => {

    // RegExp for input price limitation
    if (name === 'price') {
      const regExp = /\d*(?:-)\d*/;
      let newValue = regExp.exec(value);
      if (newValue == null) {
        if (!(/\D/.exec(value))) {
          setState({ ...state, [name]: value })
        }
      } else {
        setState({ ...state, [name]: newValue[0] });
      }

    } else {
      setState({ ...state, [name]: value });
    }
    
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(state)
    }}
    >
      <FormProvider value={{ state: state, onInputChange: onInputChange }} >
        {props.children}
      </FormProvider>
    </form>
  )
}
