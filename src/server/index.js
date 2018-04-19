import resortNames from './resortNames'
import express from 'express'
import cors from 'cors'

const AppPort = '8080'

const app = express()

const byName = name => resort => {
    return name.toLowerCase() === resort.substr(0, name.length).toLowerCase()
}

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

app.use(logger).use(cors())
    .get('/', (req, res) => {
        res.send('suggestion server')})
    .get('/resorts/:name', (req, res) => {
        let name = req.params.name
        res.status(200).json(resortNames.filter(byName(name)))})
    .get('/resorts', (req, res) => {
    res.status(200).json(resortNames)
})


app.listen(AppPort, () => {
    console.log(`suggestion server is running on localhost:${AppPort}`)
})

