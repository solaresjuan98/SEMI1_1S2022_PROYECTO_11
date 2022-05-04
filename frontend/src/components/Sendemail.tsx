import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { useTopics } from '../hooks/useTopics';


let date = new Date().toLocaleDateString();

export const Sendemail = () => {

    const { loadingselectResponse,selectResponse,sendEmail } = useTopics();
    
  
    const { formData, onChangeForm, onChangeTextArea, isNotEmpty } = useForm({
        contenidoNota: "",
        fechaNota: date,
        tituloNota: ""
    });

    const onCreateMessage = async () => {
        console.log(formData.contenidoNota)
        console.log(formData.tituloNota)
        
        if(valorselect==null){
            console.log(selectResponse[0].TopicArn)
            await sendEmail(formData.contenidoNota,formData.tituloNota,selectResponse[0].TopicArn)
        }else{
            console.log(valorselect)
            await sendEmail(formData.contenidoNota,formData.tituloNota,valorselect)
        }

    
    }

    const allOk = (): boolean => {

        return (isNotEmpty(formData.tituloNota) && isNotEmpty(formData.contenidoNota)) ? true : false

        
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
                               
                            </div>

                            <div className="form-group">

                                <div className="form-label mt-4">
                                    Subject
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="tituloNota"
                                    value={formData.tituloNota}
                                    onChange={(ev) => onChangeForm(ev)}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label mt-4">Message</label>
                                <textarea className="form-control"
                                    id="exampleTextarea"
                                    name='contenidoNota'
                                    value={formData.contenidoNota}
                                    onChange={onChangeTextArea}
                                    rows={10}
                                >
                                </textarea>
                                <div className="clearfix">
                                    <button className='btn btn-outline-primary mt-2 float-right'
                                        disabled={!allOk()}
                                        onClick={onCreateMessage }
                                        >
                                        Send
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

