import React, { useState, useContext, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
//import { messages } from "../../helpers/calendar-es";
//import { CalendarEvent } from "./CalendarEvent";
//import { AuthContext } from "../../Auth/AuthContext";
import "../App.css";
//import { AgregarEvento } from "../UI/AgregarEvento";
import axios from "axios";

moment.locale("en");
const localizer = momentLocalizer(moment);
let tieneMembresia = false;
let events_: any[] = [];

// Definir las fecha actual, para dar colores al calendario
//const ahora = moment().minutes(0).seconds(0).add(1, "hours");

export const CalendarPage = () => {
    const url = "http://localhost:4000/";
    //const { user } = useContext(AuthContext);
    //console.log(user.membresia);

    // Estado de eventos
    const [eventos, setEventos] = useState([]);
    // Estado de temporadas, para filtrar
    const [temporadas, setTemporadas] = useState([]);
    // Estado de id de temporada para filtrar
    const [idTemporada, setidTemporada] = useState(temporadas);
    // Estado de eventos filtrados, para mostrar en el calendario
    const [eventosFiltrados, setEventosFiltrados] = useState([]);
    // Temporadas activas
    const [temporadasActivas, setTemporadasActivas] = useState([]);

    useEffect(() => {
        obtenerListaEventos();

        // const interval = setInterval(() => {
        //     obtenerListaEventos();
        // }, 5000);

        //return () => clearInterval(interval);
    }, []);

    events_ = [...eventos];

    // Formateando las fechas del calendario
    for (let i = 0; i < events_.length; i++) {
        events_[i].start = moment(events_[i].start).toDate(); //.add(6, "hours").toDate();
        events_[i].end = moment(events_[i].end).toDate(); //.add(6, "hours").toDate();
        //events_[i].start = moment(events_[i].start).toDate();
        //events_[i].end = moment(events_[i].end).toDate();
    }

    //console.log(events_);

    // alterar fecha de eventos
    //console.log(moment(events_[0].start).toDate());

    const handleIdTemporadaChange = (e: any) => {
        setidTemporada(e.target.value);

        filtrarEventos(e.target.value);
    };

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

    // -------- OBTENER LISTADO DE EVENTOS --------
    const obtenerListaEventos = async () => {
        await axios.get(`${url}eventos`).then((response) => {
            const listaEventos = response.data;
            setEventos(listaEventos);
        });
    };


    // --------  FILTRAR EVENTOS POR TEMPORADA --------
    const filtrarEventos = (idTemp: string) => {
        const evFiltrados = events_.filter(
            (evento) => evento.Id_temporada === parseInt(idTemp)
        );

        //setEventosFiltrados(evFiltrados);
        console.log(evFiltrados);
    };

    return (
        <div className="container float-container mt-5">

            <h1>Calendar</h1>
            <hr />
            <div className="calendar-screen animate__animated animate__fadeInUp" style={{margin: '10px'}}>
                {/*<h3 className="mt-2">Temporada: 2021-Q21 </h3>*/}

                <Calendar
                    localizer={localizer}
                    events={eventosFiltrados}
                    startAccessor="start"
                    endAccessor="end"
                    //messages={messages}
                    eventPropGetter={eventStyleGetter}
                    onDoubleClickEvent={onDoubleClick}
                    onView={onViewChange}
                    //view={lastView}
                    onSelectEvent={onSelectEvent}
                // components={{
                //     event: CalendarEvent,
                // }}
                />

            </div>

        </div>
    );
};