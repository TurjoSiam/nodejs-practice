import express from 'express'
import phones from './phones.json' assert {type: "json"};

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('siam is a good boy happy with family')
})

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('my desired id is', id);

    const desiredPhone = phones.find(phone => phone.id === id) || {};
    res.send(desiredPhone);
})



app.listen(port, () => {
    console.log('my phone server is running');
})