// Listo
import React, { useContext } from 'react';
import FormContext from '../Context/Form'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


export default function InputEnhanced({
  component: Component,
  ...props
}) {

  const { type, name, selectValues } = props;

  const formContext = useContext(FormContext);


  

  return (
    // <Component
    //   type={type}
    //   name={name}
    //   label={name}
    //   value={formContext.state[name]}
    //   onChange={(e) => formContext.onInputChange(e.target.name, e.target.value)}
    //   {...props}
    // />

    <React.Fragment>

      {selectValues !== null &&
        <InputLabel >{name}</InputLabel>}

      <Component
        type={type}
        name={name}
        label={name}
        value={formContext.state[name]}
        onChange={(e) => formContext.onInputChange(e.target.name, e.target.value)}
        {...props}>

        {selectValues !== null && selectValues.map(res => (
          <MenuItem key={res} value={res} >
            {res}
          </MenuItem>
        ))}

      </Component>
    </React.Fragment>

  )

}
