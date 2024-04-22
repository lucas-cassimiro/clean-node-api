import { type AddAccountModel } from '@src/domain/usecases/add-account'
import { type AccountModel } from '@src/domain/models/account'

export interface AddAccountRepository {
  createAccount (accountData: AddAccountModel): Promise<AccountModel>
}
