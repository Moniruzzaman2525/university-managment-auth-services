import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully on my unicersity managment project')
})

export default app