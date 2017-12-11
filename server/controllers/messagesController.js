var messages = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        const message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },
    remove: (req, res) => {
        let deleteid = req.params.id;
        let messageIndex = messages.findIndex(message => message.id == deleteid);
        messages.splice(messageIndex ,1);
        res.status(200).send(messages);
    }
}