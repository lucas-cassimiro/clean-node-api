import { type AddAccount, type AddAccountModel, type AccountModel, type Encrypter, type AddAccountRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encrypter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async createAccount (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRepository.createAccount(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}

// A função createAccount será chamada no nosso controller SignUpController lá de presentation, ele será utilizado como se fosse um utils. Por isso, a função createAccount da classe DbAddAccount recebe um accountData

// O constructor serve para que a classe DbAddAccount receba parâmetros (para testes)

// O private readonly cria uma variável privada na nossa classe
