import { ErrorHandler } from './ErrorHandler';

describe('ErrorHandler class', () => {
  it('should return the 500 default message', () => {
    expect(ErrorHandler.getMessageByStatus(500))
      .toBe('Erro interno inesperado, se persistir o erro entre em contato com o suporte');
  });

  it('should return the 401 default message', () => {
    expect(ErrorHandler.getMessageByStatus(401))
      .toBe('Você não tem autorização para acessar o recurso solicitado,'
          + 'para saber mais entre em contato com o suporte');
  });

  it('should returns null for the non described 200 error', () => {
    expect(ErrorHandler.getMessageByStatus(200)).toBeNull();
  });

  it('should returns null for the non described 403 error', () => {
    expect(ErrorHandler.getMessageByStatus(403)).toBeNull();
  });
});
