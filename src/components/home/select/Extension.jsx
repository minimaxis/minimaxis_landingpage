import './Select.css'
import "@fontsource/poppins";
import development from '../../../assets/development.png'
import React from 'react';

export default function ExtensionComponent() {

  return <div className='containeroptions'>

    <div className='cardoptions'>
      <div className='cardorganize'>
        <p className='cardp'>EXTENSION</p>
        <h2 className='cardh2'>IN DEVELOPMENT</h2>
        <img src={development} id='photodevelopment' />
        <p className='cardpp'>We are developing an extension for the Bitcoin developer <br></br>to have syntax support or silly errors.</p>
      </div>
    </div>

  </div>
};
