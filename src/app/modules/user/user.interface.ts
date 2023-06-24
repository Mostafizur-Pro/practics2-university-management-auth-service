import { Model } from 'mongoose'

export type IUser = {
  id: string
  role: string
  password: string
  //   student?: Types.ObjectId | IStudent
}

// model
export type UserModel = Model<IUser, object>
