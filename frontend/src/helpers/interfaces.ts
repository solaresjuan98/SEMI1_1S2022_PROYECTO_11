
export interface Event {
    title: string;
    start: Date;
    end: Date;
    bgcolor: string;
    notes: string;
    user?: {
        _id: string;
        name: string;
    }
}

// * Notes response
export interface NotesResponse {
    userNotes: UserNote[];
    correcto: boolean;
}

export interface UserNote {
    tituloNota: string;
    contenidoNota: string;
}


// * Events response
export interface EventsResponse {
    userEvents: UserEvent[];
    correcto: boolean;
}

export interface UserEvent {
    nombreEvento: string;
    descripcionEvento: string;
    fechaInicio: string;
    fechaFinal: string;
}
