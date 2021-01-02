import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '..';

describe('Login component unit test', () => {
  describe('should render the component correctly', () => {
    it('should shows the login title information ', () => {
      render(<Login />);
      const title = screen.queryByRole('heading', { name: 'Entrar em sua conta' });
      expect(title).not.toBeNull();
    });

    it('should shows the email input with apropriate placeholder', () => {
      render(<Login />);
      const title = screen.queryByLabelText('Endereço de email *');
      expect(title).not.toBeNull();
    });

    it('should shows the password input with apropriate placeholder', () => {
      render(<Login />);
      const title = screen.queryByLabelText('Senha *');
      expect(title).not.toBeNull();
    });

    it('should shows the remember password check with correct text', () => {
      render(<Login />);
      const title = screen.queryByText(/^Lembrar minha senha$/g);
      expect(title).not.toBeNull();
    });

    it('should shows the login CTA with correct text', () => {
      render(<Login />);
      const title = screen.queryByRole('button', { name: /Entrar/g });
      expect(title).not.toBeNull();
    });
  });
});
