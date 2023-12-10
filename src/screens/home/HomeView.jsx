import React, { useState } from 'react';
import './Home.css'
import ChatHelperComponent from '../../components/home/select/ChatHelperComponent';
import Documentantion from '../../components/home/select/Documentation';
import AboutUsComponent from '../../components/home/select/AboutUS';
import ExtensionComponent from '../../components/home/select/Extension';

export default function HomeView() {
    const [select, setSelect] = useState('A');

    const handleSelect = (option) => {
        setSelect(option);
    };

    let componentRender;

    switch (select) {
        case 'A':
            break;
        case 'B':
            componentRender = <ChatHelperComponent />;
            break;
        case 'C':
            componentRender = <Documentantion />;
            break;
        case 'D':
            break;    
        default:
            componentRender = null;
    }

    return (
        <div className='containerhome'>
            <div className='containerselect'>
                <button
                    onClick={() => handleSelect('A')}
                    className={select === 'A' ? 'button-onselect' : 'button-noselect'}
                >
                    MINIMAXIS AND FLOWCHART
                </button>
                <button
                    onClick={() => handleSelect('B')}
                    className={select === 'B' ? 'button-onselect' : 'button-noselect'}
                >
                    CHAT HELPER DEVELOPERS
                </button>
                <button
                    onClick={() => handleSelect('C')}
                    className={select === 'C' ? 'button-onselect' : 'button-noselect'}
                >
                    DOCUMENTATION
                </button>
                <button
                    onClick={() => handleSelect('D')}
                    className={select === 'D' ? 'button-onselect' : 'button-noselect'}
                >
                    EXTENSION FOR IDE 
                </button>
            </div>
                {select === 'A' && <AboutUsComponent />}
                {select === 'B' && <ChatHelperComponent />}
                {select === 'C' && <Documentantion />}
                {select === 'D' && <ExtensionComponent />}
        </div>
    );
};