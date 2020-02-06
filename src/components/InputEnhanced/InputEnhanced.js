// Listo
import React, { useContext } from 'react';
import FormContext from '../Context/Form'


export default function InputEnhanced({
  component: Component,
  ...props
}) {

  const { type, name } = props;

  const formContext = useContext(FormContext);

  return (
    <Component
      type={type}
      name={name}
      label={name}
      value={formContext.state[name]}
      onChange={(e) => formContext.onInputChange(e.target.name, e.target.value)}
      {...props}
    />
  )

}
