
export const a = '';

export interface Event {
    title: string;
    start: Date;
    end: Date;
    bgcolor: string;
    notes: string;
    user: {
        _id: string;
        name: string;
    }
}