import { type Controller, type HttpRequest, type HttpResponse } from '../../protocols'
import { badRequest, serverError } from '../../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../../errors'
import { type EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['email', 'password']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { email } = httpRequest.body

      const isValid = this.emailValidator.isValid(email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }

      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    } catch (error) {
      return serverError(error)
    }
  }
}
