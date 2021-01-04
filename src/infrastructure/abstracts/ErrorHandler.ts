export class ErrorHandler {
  protected static errors: [number, string][];

  public constructor() {
    ErrorHandler.errors = [
      [401, 'Você não tem autorização para acessar o recurso solicitado,'
          + 'para saber mais entre em contato com o suporte'],
      [404, 'O recurso solicitado não foi encontrado'],
      [500, 'Erro interno inesperado, se persistir o erro entre em contato com o suporte'],
      [501, 'O recurso solicitado ainda não existe, ficará disposnpivel em breve'],
    ];
  }

  public static getMessageByStatus(status: number): string | null {
    const found = this.getErrorByStatus(status);

    if (found) {
      return found[1];
    }

    return null;
  }

  public static getErrorByStatus(status: number): [number, string] | null {
    const found = this.errors.find((error) => (
      error[0] === status
    ));

    if (found) {
      return found;
    }

    return null;
  }
}

export default new ErrorHandler();
