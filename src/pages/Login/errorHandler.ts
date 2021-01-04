import { ErrorHandler } from 'infrastructure/abstracts/ErrorHandler';

export class LoginErrorHandler extends ErrorHandler {
  public constructor() {
    super();
    ErrorHandler.errors.push(
      [400, 'Usuário ou senha inválidos'],
    );
  }
}

export default new LoginErrorHandler();
