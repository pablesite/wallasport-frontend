import React, { useContext } from 'react';

import FormContext from '../Context/Form'

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


export default function InputEnhanced({
  component: Component,
  ...props
}) {

  // Origin props of the component
  const { type, name, selectvalues } = props;


  const formContext = useContext(FormContext);

  return (

    <React.Fragment>

      {selectvalues !== undefined &&
        <InputLabel >{name}</InputLabel>}
      {
        <Component
          type={type}
          name={name}
          label={name}
          value={formContext.state[name]}
          onChange={(e) => formContext.onInputChange(e.target.name, e.target.value)}
          {...props}>

          {selectvalues !== undefined && selectvalues.map(res => (
            <MenuItem key={res} value={res} >
              {res}
            </MenuItem>
          ))}

        </Component>}

    </React.Fragment>

  )

}
