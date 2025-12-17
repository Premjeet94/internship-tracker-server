import express from 'express'
import { Login, Register } from '../Controllers/auth.controller'

export const authRouter = express()

Router.post('/register',Register)
Router.post('/login', Login)