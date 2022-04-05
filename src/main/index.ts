import { Router } from 'express'
import LocationRouter from './location'
import SectorRouter from './sector'

const router = Router()

router.use('/locations', LocationRouter)
router.use('/sectors', SectorRouter)

export default router
