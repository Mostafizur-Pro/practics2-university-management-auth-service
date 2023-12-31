import express from 'express'
import userController from './user.controller'
import validateRequest from '../../middleware/validateRequest'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('', userController.getAllUser)
router.get('/:id', userController.getSingleUser)
router.delete('/:id', userController.deleteUser)
// router.patch(
//   '/:id',
//   validateRequest(UserValidation.updateUserZodSchema),
//   userController.updateUser
// )
router.patch(
  '/:id',
  validateRequest(UserValidation.createUserZodSchema),
  userController.updateUser
)

export const userRouter = router
