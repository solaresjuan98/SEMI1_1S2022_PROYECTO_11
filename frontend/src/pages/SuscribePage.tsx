import React, { useState } from 'react'
import { Sendemail } from '../components/Sendemail';
import { Topics } from '../components/Topics';
import { CreateTopics } from '../components/Createtopic';

export const SuscribePage = () => {

    const [showSuscribe, setShowSuscribe] = useState(true);

    const onShowSuscribe = () => {

        setShowSuscribe(!showSuscribe);
    }


    return (
        <div >

            

            <div className="mt-4" style={{ margin: '20px' }}>
                {
                    showSuscribe ? (
                        <Topics/>
                    ) : (
                        
                        <CreateTopics/>
                    )
                }
            </div>

            <button className='btn btn-outline-primary' onClick={onShowSuscribe}>

                {showSuscribe ? 'Add new topic' : 'Suscriptions'}
                <i className="bi bi-clipboard2-plus"></i>
            </button>

            
        </div>
    )
}
