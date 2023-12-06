import React from 'react';
import '../Select.css'

export default function Person(props)  {

  const { imgSrc, name, subtitle } = props;

  return (
    <div>
      <img src={imgSrc} className="imgperson" alt="Conor Okus"/>
      <div>
        <p className='p-persons'>{name}</p>
        <p className='pp-persons'>{subtitle}</p>
      </div>
    </div>
  );
};

