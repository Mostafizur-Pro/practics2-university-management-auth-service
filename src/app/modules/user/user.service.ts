import config from '../../../config'
import { IUser } from './user.interface'
import { User } from './user.model'
import { generateUserId } from './user.utility'

export const createUser = async (user: IUser): Promise<IUser | null> => {
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

export default {
  createUser,
}
