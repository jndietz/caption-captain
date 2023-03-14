import express from 'express';
const app = express();
const port = 3000;

app.get('/images', (req, res) => {
    res.send({
        key: "value"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})