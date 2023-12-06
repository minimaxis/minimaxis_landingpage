import './Select.css'
import "@fontsource/poppins";
import React, { useState } from 'react';
import Modal from 'react-modal';
import mockup from '../../../assets/mini-mockup.png'
import community from '../../../assets/community.png'


export default function ChatHelperComponent() {

  const [modalIsOpenPlatform, setModalIsOpenPlatform] = useState(false);

  const openModalPlatform = () => {
    setModalIsOpenPlatform(true);
   };

  const closeModalPlatform = () => {
     setModalIsOpenPlatform(false);
  };

  const navigateChat = () => {
    window.location.replace("https://app.minimaxis.com")
  }

  const navigateForms = () => {
    window.location.replace("https://forms.gle/wfUcAPbsaiMs6QGJ6")
  }

  return (
    <div className='containeroptions'>

      <div className='cardoptions'>
        <div className='cardorganize'>
          <p className='cardp'>CHAT HELPER DEVELOPERS</p>
          <h2 className='cardh2'>ARTIFICIAL INTELLIGENCE</h2>
          <img src={mockup} id='mini-mockup' />
          <p className='cardpp'>Our chat assists the developer throughout the journey of developing<br></br> in miniscript, even providing a demo flowchart!</p>
          <button className='cardbutton' onClick={openModalPlatform}>Try it now</button>
        </div>
      </div>

      <Modal
                isOpen={modalIsOpenPlatform}
                onRequestClose={closeModalPlatform}
                overlayClassName="custom-modal-overlay"
                className="custom-modal-content"
            >
                <div className='containersupermodal'>
                    <button onClick={navigateChat} className='cardbutton'>Website</button>
                    <button onClick={navigateChat} className='cardbutton'>Android</button>
                    <button onClick={navigateChat} className='cardbutton'>IOS</button>
                </div>
            </Modal>

      <div className='cardoptions'>
        <div className='cardorganize'>
          <p className='cardp'>WE NEED THE</p>
          <h2 className='cardh2'>COMMUNITY</h2>
          <img src={community} className='imgdocs' />
          <p className='cardpp'>We need the community to develop our artificial intelligence<br></br> to help developers.</p>
          <button className='cardbutton' onClick={navigateForms}>Help train</button>
        </div>
      </div>

    </div>
  )
};

