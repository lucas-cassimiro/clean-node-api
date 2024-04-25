// import { MongoHelper } from '../helpers/mongo-helper'
// import { AccountMongoRepository } from './account'

// describe('Account Mongo Repository', () => {
//   beforeAll(async () => {
//     await MongoHelper.connect('mongodb://127.0.0.1:3096/')
//   })

//   afterAll(async () => {
//     await MongoHelper.disconnect()
//   })

//   const makeSut = (): AccountMongoRepository => {
//     return new AccountMongoRepository()
//   }

//   test('Should return an account on success', async () => {
//     const sut = makeSut()
//     const account = await sut.createAccount({
//       name: 'any_name',
//       email: 'any_email@mail.com',
//       password: 'any_password'
//     })
//     expect(account).toBeTruthy()
//     expect(account.id).toBeTruthy()
//     expect(account.name).toBe('any_name')
//     expect(account.email).toBe('any_email@mail.com')
//     expect(account.password).toBe('any_password')
//   })
// })
