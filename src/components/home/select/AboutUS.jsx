import './Select.css'
import "@fontsource/poppins";
import React, { useState } from 'react';
import photo from '../../../assets/photo-sats.png'
import minibig from '../../../assets/minibig.png'



export default function AboutUsComponent() {

    return (
        <div className='containerabout'>
            <div className='containeroptions'>
                <div className='cardoptions'>
                    <div className='cardorganize'>
                        <p className='cardp'>ABOUT US</p>
                        <h2 className='cardh2'>MINIMAXIS</h2>
                        <img src={minibig} id='photowinners' />
                        <p className='cardpp'>Minimaxis was born to facilitate bitcoin smart contracts,<br></br> as they are the new frontier to be overcome and democratized<br></br>  and I hope that we will be able to overcome this barrier.</p>
                    </div>
                </div>

                <div className='cardoptions'>
                    <div className='cardorganize'>
                        <p className='cardp'>SATSHACK</p>
                        <h2 className='cardh2'>WINNERS</h2>
                        <img src={photo} id='photowinners' />
                        <p className='cardpp'>We won the Satshack hackathon at the biggest bitcoin <br></br>event in Brazil, SatsConf!</p>
                    </div>
                </div>
            </div>

        </div>
    )
};

