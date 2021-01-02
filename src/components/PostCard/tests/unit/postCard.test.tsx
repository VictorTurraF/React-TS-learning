import * as React from 'react';
import { PostCard } from 'components';
import { render, screen } from '@testing-library/react';

describe('PostCard Component', () => {
  describe('When the component rendering', () => {
    it('Should have a description title', async () => {
      render(<PostCard />);
      const alertFeedback = await screen.findByRole('alert');
      expect(alertFeedback).toHaveTextContent(/Post encontrado/g);
      const postInformation = await screen.findByRole('heading');
      expect(postInformation).toHaveTextContent(/Seu post/g);
    });
  });
});
