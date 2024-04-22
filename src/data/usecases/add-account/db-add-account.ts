import { type AddAccount, type AddAccountModel } from '@src/domain/usecases/add-account'
import { type AccountModel } from '@src/domain/models/account'
import { type Encrypter } from '@src/data/protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async createAccount (account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => { resolve(null) })
  }
}
