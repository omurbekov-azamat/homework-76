import express from "express";
import {MessageWithoutId} from "../types";
import fileDb from "../fileDb";

const messagesRouter = express.Router();

messagesRouter.post('/', async (req, res) => {

    if (!req.body.author || !req.body.message) {
        return res.status(400).send({error: 'All fields are required'});
    }

    const messageData: MessageWithoutId = {
        author: req.body.author,
        message: req.body.message,
    };

    const saveMessage = await fileDb.addMessage(messageData);

    res.send(saveMessage);
});

messagesRouter.get('/', async (req, res) => {
    if (req.query.datetime) {

        const queryDate = req.query.datetime as string;
        const date = new Date(queryDate);

        if (isNaN(date.getDate())) {
            return res.status(400).send({error: 'Invalid datetime'});
        } else {
            const array = await fileDb.getMessageAfterDate(queryDate);
            res.send(array)
        }

    } else {
        const messages = await fileDb.getMessages();
        res.send(messages);
    }
});

export default messagesRouter;