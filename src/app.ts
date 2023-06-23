import { Application, Response, Request } from 'express'
import express from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.route'

const app: Application = express()

// middleware
app.use(cors())

// perser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// User Router
app.use('/api/v1/user', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
