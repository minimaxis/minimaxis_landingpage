import './Select.css'
import "@fontsource/poppins";
import React  from 'react';
import photo from '../../../assets/flow-sa1.png'
import minibig from '../../../assets/minibig.png'



export default function AboutUsComponent() {

    const navigateFlowchart = () => {
        window.location.replace("https://chat.minimaxis.com/")
      }

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
                        <p className='cardp'>FLOWCHART</p>
                        <h2 className='cardh2'>FOR MINISCRIPTS</h2>
                        <img src={photo} id='photowinners' />
                        <p className='cardpp'>Convert MiniScript code into an intuitive flowchart so that you can <br></br>better understand MiniScript.</p>
                        <button className='cardbutton' onClick={navigateFlowchart}>Try it now</button>
                    </div>
                </div>
            </div>

        </div>
    )
};

