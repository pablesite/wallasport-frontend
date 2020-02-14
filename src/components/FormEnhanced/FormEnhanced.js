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
    // setState({
    //   ...state,
    //   [name]: value
    // })

    if (name === 'price') {

      //   if ((!/\D/.exec(value))) {
      //     setState({
      //       ...state,
      //       [name]: value
      //     });
      //   }
      // } else {
      //   setState({
      //     ...state,
      //     [name]: value
      //   });
      // }

      if (name === 'price') {
        const regExp = /\d*(?:-)\d*/;
        let newValue = regExp.exec(value);
        if (newValue == null) {
          if (!(/\D/.exec(value))) {
            setState({
              ...state,
              [name]: value
            });
          }
        } else {
          setState({
            ...state,
            [name]: newValue[0]
          });
        }
      }
    } else {
      setState({
        ...state,
        [name]: value
      });
    }

  }







  return (
    <form onSubmit={handleSubmit1}  >
      <FormProvider value={{ state: state, onInputChange: onInputChange }} >
        {props.children}
      </FormProvider>
    </form>
  )
}
