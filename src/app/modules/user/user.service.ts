import config from '../../../config'
import { IGenericResponse } from '../../../interfaces/common'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utility'

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const createUser = async (user: IUser): Promise<IUser | null> => {
  // id generate
  const id = await generateUserId()
  user.id = id

  // default password
  if (!user.password) {
    user.password = config.default_student_pass as string
  }

  const createUser = await User.create(user)
  // thow error
  if (!createUser) {
    throw new Error('Failed to create user!')
  }
  return createUser
}

const getAllUser = async (): Promise<IGenericResponse<IUser[]>> => {
  const result = await User.find()
  const total = result.length
  // IgenericResponse
  return {
    meta: {
      total,
    },
    data: result,
  }
}
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id })
  return result
}
const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete({ _id: id })
  return result
}
export default {
  createUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  updateUser,
}
