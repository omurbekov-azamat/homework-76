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

export default messagesRouter;