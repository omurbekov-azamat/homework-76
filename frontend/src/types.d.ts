export interface Message {
    message: string;
    author: string;
    id: string;
    datetime: string;
}

export interface MessageMutation {
    author: string;
    message: string;
}