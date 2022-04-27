import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../App.css";
import { CalendarEvent } from "../components/calendar/CalendarEvent";
import { CreateEventModal } from "../components/calendar/CreateEventModal";

moment.locale("en");
const localizer = momentLocalizer(moment);
let events_: any[] = [];

// Definir las fecha actual, para dar colores al calendario
//const ahora = moment().minutes(0).seconds(0).add(1, "hours");

export const CalendarPage = () => {

    const [openModal, setOpenModal] = useState(false);
    // Estado de eventos
    const [eventos, setEventos] = useState([]);

    // * Estado de eventos filtrados, para mostrar en el calendario
    const events = [
        {
            title: "My birthday",
            start: moment().toDate(), // is valid new Date() too
            end: moment().add(2, "hours").toDate(),
            bgcolor: "#fafafa",
            notes: "Buy a cake :v",
            user: {
                _id: "123",
                name: "John",
            },
        },
    ];

    console.log(events);
    useEffect(() => {

    }, []);

    events_ = [...eventos];

    // Formateando las fechas del calendario
    for (let i = 0; i < events_.length; i++) {
        events_[i].start = moment(events_[i].start).toDate(); //.add(6, "hours").toDate();
        events_[i].end = moment(events_[i].end).toDate(); //.add(6, "hours").toDate();

    }

    //console.log(events_);

    // alterar fecha de eventos
    //console.log(moment(events_[0].start).toDate());

    const [lastView, setLastView] = useState(
        localStorage.getItem("lastView") || "month"
    );

    const onDoubleClick = (e: any) => {
        console.log(e);
    };

    const onSelectEvent = (e: any) => {
        console.log(e);
    };

    const onViewChange = (e: any) => {
        setLastView(e);
        localStorage.setItem("lastView", e);
    };

    const eventStyleGetter = (event: any, start: any, end: any, isSelected: any) => {
        const style = {
            backgroundColor: "#3391AD", // Personalizar colores
            borderRAdius: "0px",
            opacity: 0.8,
            display: "block",
            color: "white",
        };

        return {
            style,
        };
    };

    const handleShowModal = () => {
        setOpenModal(!openModal);
        //console.log('openModal');
    }


    // * Filtrar eventos del estudiante --------
    const filtrarEventos = (idTemp: string) => {
        const evFiltrados = events_.filter(
            (evento) => evento.Id_temporada === parseInt(idTemp)
        );


    };

    return (
        <div className="container float-container mt-5">

            <h1>Calendar</h1>
            <hr />
            <button className="btn btn-outline-primary" onClick={handleShowModal}>Add new event</button>
            {openModal ? (
                <CreateEventModal maxHeight={555} />
            ) : (
                <h5>{""}</h5>
            )}
            <div className="calendar-screen animate__animated animate__fadeInUp" style={{ margin: '10px' }}>


                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    //messages={messages}
                    eventPropGetter={eventStyleGetter}
                    onDoubleClickEvent={onDoubleClick}
                    onView={onViewChange}
                    //view={lastView}
                    onSelectEvent={onSelectEvent}
                    components={{
                        event: CalendarEvent,
                    }}
                />

            </div>

        </div>
    );
};