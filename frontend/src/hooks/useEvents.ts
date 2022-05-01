import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Event } from '../helpers/interfaces'
import { UserEvent } from '../helpers/interfaces';
import moment from 'moment';


export const useEvents = () => {

    const { auth } = useContext(AuthContext);

    const idUser = auth.uid;

    const [loadingEvents, setLoadingEvents] = useState(true);
    const [events, setEvents] = useState<Event[]>([])
    const [userEvents, setUserEvents] = useState<UserEvent[]>([]);

    const getUserEvents = async () => {

        await axios.get(`${process.env.REACT_APP_BACKEND}/events/${idUser}`)
            .then((response) => {
                ////console.log(response.data.userNotes);
                setUserEvents(response.data.userEvents)
                setLoadingEvents(false);

                if (response.data.correcto) {
                    userEvents.map((event) => {

                        let newEvent = {
                            title: '',
                            start: moment().toDate(),
                            end: moment().toDate(),
                            bgcolor: "#fafafa",
                            notes: '',
                            // user: {
                            //     _id: auth.uid,
                            //     name: ''
                            // }
                        };

                        newEvent.title = event.nombreEvento;
                        newEvent.start = moment(event.fechaInicio).toDate();
                        newEvent.end = moment(event.fechaInicio).toDate();
                        newEvent.notes = event.descripcionEvento

                        console.log(newEvent);

                        //! CORREGIR
                        setEvents([...events, newEvent])
                        console.log(events.length)
                    })
                }


            })
            .catch((error) => {
                console.log(error);
                setLoadingEvents(true)
            })

    }


    useEffect(() => {
        const interval = setInterval(() => {
            getUserEvents();
        }, 3500);

        getUserEvents()
        return () => clearInterval(interval);
    }, [])


    return {
        loadingEvents,
        userEvents,
        events
    }
}
