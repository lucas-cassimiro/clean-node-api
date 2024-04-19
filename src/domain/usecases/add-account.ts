import { type AccountModel } from '../models/account'

export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAccount {
  createAccount: (account: AddAccountModel) => Promise<AccountModel>
}
