import express from 'express'

const router = express.Router()

router
	.get( '/register',showRegister )

export default router