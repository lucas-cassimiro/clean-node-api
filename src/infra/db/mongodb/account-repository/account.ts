import { type AddAccountRepository } from '@src/data/protocols/add-account-repository'
import { type AddAccountModel } from '@src/domain/usecases/add-account'
import { type AccountModel } from '@src/domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async createAccount (accountData: AddAccountModel): Promise<AccountModel> {
    return {
      id: 'any',
      email: 'asdasd',
      name: 'asdsad',
      password: 'aaa'
    }
  }
}
