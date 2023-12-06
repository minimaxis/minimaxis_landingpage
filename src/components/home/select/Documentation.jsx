import './Select.css'
import "@fontsource/poppins";
import girlimg from '../../../assets/girl-learn.png'
import babyimg from '../../../assets/baby-compilator.png'
import React from 'react';

export default function Documentantion() {

  const navigateDoc = () => {
    window.location.replace("https://bitcoin.sipa.be/miniscript/")
  }

  return <div className='containeroptions'>

    <div className='cardoptions'>
      <div className='cardorganize'>
        <p className='cardp'>MINISCRIPT</p>
        <h2 className='cardh2'>INTRODUCTION</h2>
        <img src={girlimg} className='imgdocs' />
        <p className='cardpp'>Learn about getting started with <br></br>the miniscript.</p>
        <button className='cardbutton' onClick={navigateDoc}>Read Now</button>
      </div>
    </div>

    <div className='cardoptions'>
      <div className='cardorganize'>
        <p className='cardp'>MINISCRIPT</p>
        <h2 className='cardh2'>COMPILATOR</h2>
        <img src={ babyimg} className='imgdocs' />
        <p className='cardpp'>Learn, study, and test our MiniScript <br></br> compiler!.</p>
        <button className='cardbutton' onClick={navigateDoc}>Test Now</button>
      </div>
    </div>

  </div>
};
