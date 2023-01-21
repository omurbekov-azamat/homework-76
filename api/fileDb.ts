import {MessageWithId, MessageWithoutId} from "./types";
import {randomUUID} from "crypto";
import {promises as fs} from "fs";

const fileName = './chat.json';
let data: MessageWithId[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(fileName);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getMessages() {
        return data.slice(-30);
    },
    async getMessageAfterDate(id: string) {
        return data.filter(message => message.datetime > id)
    },
    async addMessage(message: MessageWithoutId) {
        const newMessage = {
            id: randomUUID(),
            datetime: new Date().toISOString(),
            ...message,
        };
        data.push(newMessage);
        await this.save();
        return newMessage;
    },
    async save() {
        await fs.writeFile(fileName, JSON.stringify(data));
    },
};

export default fileDb;