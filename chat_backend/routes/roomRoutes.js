import express from 'express'
import { createRoom, joinRoom, exitRoom, getRoomInfo } from '../controllers/roomController.js'

const router = express.Router()

router.post('/create', createRoom)
router.post('/join', joinRoom)
// router.get('/getUsers', getRoomUsers)
router.delete('/exit', exitRoom)
router.get(`/info`, getRoomInfo)

export default router