import express from 'express'
import cors from 'cors'
import authrouter  from './Routes/auth.routes.js'
import applicationrouter from './Routes/applicationRoutes.js'

export const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth',authrouter)
app.use('/api/applications',applicationrouter)

app.get('/health', async(req,res)=>{
    res.status(200).json({status:"ok",message:"Server is healthy"})
})