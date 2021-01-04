import { LoginErrorHandler } from './errorHandler';

describe('Login Error Handler unit test', () => {
  it('should return the 400 error message', () => {
    expect(LoginErrorHandler.getMessageByStatus(400))
      .toBe('Usuário ou senha inválidos');
  });

  it('should ');
});
