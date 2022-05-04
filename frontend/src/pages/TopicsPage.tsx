import React, { useState } from 'react'
import { Sendemail } from '../components/Sendemail';
import { Topics } from '../components/Topics';
import { SuscribePage } from '../pages/SuscribePage';

export const TopicsPage = () => {

    const [showTopics, setShowTopics] = useState(true);

    const onShowTopics = () => {

        setShowTopics(!showTopics);
    }


    return (
        <div className='container-fluid float-container mt-5'>
            <h1>Topics</h1>

            <button className='btn btn-outline-primary' onClick={onShowTopics}>

                {showTopics ? 'Send email' : 'Topics'}
                <i className="bi bi-clipboard2-plus"></i>
            </button>
            <hr />

            <div className="mt-4" style={{ margin: '20px' }}>
                {
                    showTopics ? (
                        <SuscribePage/>
                    ) : (
                        
                        <Sendemail/>
                    )
                }
            </div>

            
        </div>
    )
}
