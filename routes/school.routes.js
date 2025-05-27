import {Router}from 'express'

import { AddSchool, listSchools } from '../controllers/school.controller.js'

const router = Router()

router.post('/addSchool',AddSchool)
router.get('/listSchools',listSchools)

export default router