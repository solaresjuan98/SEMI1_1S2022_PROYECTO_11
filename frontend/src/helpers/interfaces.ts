
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
    idNota: number;
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

// * Todos response

export interface TodosResponse {
    userTodos: UserTodo[];
    correcto: boolean;
}

export interface UserTodo {
    idTodo: number;
    tituloTodo: string;
    contenidoTodo: string;
    completado: number;
}

// * Translation
export interface TranslateResponse {
    message: Message;
}

export interface Message {
    TranslatedText: string;
    SourceLanguageCode: string;
    TargetLanguageCode: string;
}

// * Labels
export interface Detection {
    Labels?: Label[];
    LabelModelVersion?: string;
}

export interface Label {
    Name: string;
    Confidence: number;
    Instances: Instance[];
    Parents: Parent[];
}

export interface Instance {
    BoundingBox: BoundingBox;
    Confidence: number;
}

export interface BoundingBox {
    Width: number;
    Height: number;
    Left: number;
    Top: number;
}

export interface Parent {
    Name: string;
}

// * Audio

export interface AudioResponse {
    mensaje: string;
    url: string;
    correcto: boolean;
}

// * Extract text from image

export interface TextDectection {
    mensaje: string;
    salida: string;
}

export interface Topic {
    TopicArn: string;
}