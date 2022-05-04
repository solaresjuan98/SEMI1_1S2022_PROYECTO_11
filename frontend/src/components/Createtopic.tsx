import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { useTopics } from '../hooks/useTopics';


let date = new Date().toLocaleDateString();

export const CreateTopics = () => {

    const {newtopic} = useTopics();
    
  
    const { formData, onChangeForm, isNotEmpty } = useForm({
        topicname: ""
    });

    const {topicname} = formData;

    const Create = async () => {
        console.log(formData.topicname)
      
        await newtopic(topicname)
     
    }

    const allOk = (): boolean => {

        return (isNotEmpty(formData.topicname)) ? true : false

        
    }

    
    return (
        <>

            {/** Convert image into a note */}

            {
   
                    (
                        <>
                        <div className="form-group">
                                

                            <div className="form-group">

                                <div className="form-label mt-4">
                                    Topic Name
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="topicname"
                                    value={formData.topicname}
                                    onChange={(ev) => onChangeForm(ev)}
                                />
                            </div>

                            <div className="clearfix">
                                    <button className='btn btn-outline-primary mt-2 float-right'
                                        disabled={!allOk()}
                                        onClick={Create}
                                        >
                                        Create
                                    </button>
                                </div>
                               
                            </div>
        
                        </>





                    )
            }


        </>
    )
}

function isNotEmpty(carnetUsuario: any) {
    throw new Error('Function not implemented.');
}
