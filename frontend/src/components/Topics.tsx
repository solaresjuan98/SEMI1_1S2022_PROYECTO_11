import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { useTopics } from '../hooks/useTopics';


let date = new Date().toLocaleDateString();

export const Topics = () => {

    const { loadingselectResponse,selectResponse,suscribetopic} = useTopics();
    
  
    const { formData, onChangeForm, isNotEmpty } = useForm({
        email: ""
    });

    const {email} = formData;

    const Suscribe = async () => {
        console.log(formData.email)
      
        
        if(valorselect==null){
            console.log(selectResponse[0].TopicArn)
            await suscribetopic(email,selectResponse[0].TopicArn)
        }else{
            console.log(valorselect)
            await suscribetopic(email,valorselect)
        }

    
    }

    const allOk = (): boolean => {

        return (isNotEmpty(formData.email)) ? true : false

        
    }

    const [valorselect, setvalorselect] = useState<string | null>(null);

    
    return (
        <>

            {/** Convert image into a note */}

            {
   
                    (
                        <>
                        <div className="form-group">
                                
                                <div className="form-label mt-4">
                                    Topic
                                </div>
                                
                           
                                
                            <select name="topics" className="form-control" onChange={ (event) => setvalorselect( event.target.value)}>
                                {
                                selectResponse.map((topic, i) => (
                                    <option key={i} value={topic.TopicArn}>{topic.TopicArn.split(":")[5]}</option>
                                ))

                                }
                            </select>

                            <div className="form-group">

                                <div className="form-label mt-4">
                                    Correo
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={(ev) => onChangeForm(ev)}
                                />
                            </div>

                            <div className="clearfix">
                                    <button className='btn btn-outline-primary mt-2 float-right'
                                        disabled={!allOk()}
                                        onClick={Suscribe}
                                        >
                                        Suscribe
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
