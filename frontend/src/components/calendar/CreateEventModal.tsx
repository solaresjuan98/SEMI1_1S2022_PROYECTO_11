import axios from "axios";
import { useState } from "react";
import Modal from 'react-modal'
import { useForm } from "../../hooks/useForm";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";




interface Props {
    maxHeight: number;
}

Modal.setAppElement("#root");
//const baseURL = process.env.REACT_APP_API_URL;
// Fecha de inicio
const now = moment().minutes(0).seconds(0).add(1, "hours");
// Fecha de finalizacion
const finalDate = now.clone().add(1.5, "hours"); // 1 hora despues del inicio

export const CreateEventModal = ({ maxHeight }: Props) => {

    const [dateStart, setdateStart] = useState(now.toDate());
    const [dateEnd, setdateEnd] = useState(finalDate.toDate());

    // *MODAL STYLES
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxHeight: `${maxHeight}px`
        },
    };

    const { formData, onChangeForm, onChangeDate, onChangeTextArea } = useForm({
        nombreEvento: '',
        descripcionEvento: '',
        fechaInicio: moment(now).toDate(),
        fechaFinal: moment(finalDate).toDate()
    });

    const { nombreEvento, descripcionEvento } = formData;

    const [modalIsOpen, setModalIsOpen] = useState(true)

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const submitEvent = (ev: any) => {
        ev.preventDefault();
        // ?April 30, 2022 10:00 PM
        console.log(moment(formData.fechaInicio).format("LLL").toString())
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
            contentLabel="Example Modal"
        >
            <h3>Add new event</h3>
            <hr />

            <form className="container" onSubmit={submitEvent}>
                <div className="form-group">
                    <label className="form-label mt-2">Name event</label>
                    <input
                        type="text"
                        name='nombreEvento'
                        autoComplete="off"
                        className="form-control"
                        value={nombreEvento}
                        onChange={onChangeForm}
                    // className={`form-control ${confirmPasswords() ? 'is-valid' : 'is-invalid'} `} 
                    />
                </div>

                <div className="form-group">
                    <label className="form-label mt-2">Fecha inicio</label>
                    <DateTimePicker
                        minDate={dateStart}
                        value={formData.fechaInicio}
                        onChange={(ev) => onChangeDate(ev, 'fechaInicio')}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label mt-2">Fecha final</label>
                    <DateTimePicker
                        //onChange={handleEndDateChange}
                        minDate={dateStart}
                        value={formData.fechaFinal}
                        onChange={(ev) => onChangeDate(ev, 'fechaFinal')}
                        className="form-control"
                    />
                </div>


                <div className="form-group">
                    <label className="form-label mt-4">Event description</label>
                    <textarea className="form-control"
                        name="descripcionEvento"
                        value={descripcionEvento}
                        onChange={onChangeTextArea}
                        id="exampleTextarea" rows={4}></textarea>
                </div>

                <div className="form-group d-grid gap-2 mt-3">
                    <button className='btn btn-success' disabled={false}>Add event to calendar</button>
                </div>

            </form>
        </Modal>
    );
};
