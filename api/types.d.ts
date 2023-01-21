export interface MessageWithoutId {
    message: string;
    author: string;
}

export interface MessageWithId extends MessageWithoutId {
    id: string;
    datetime: string;
}