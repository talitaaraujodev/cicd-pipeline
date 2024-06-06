const express = require('express')

const app = express()


const PORT = 5000;
app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "Hello world!!"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})