import * as React from 'react';
import { rest } from 'msw';
import { render, screen } from '@testing-library/react';
import server from 'mocks/server';
import config from 'api/config';
import PostCard from '../../index';

describe('PostCard Component', () => {
  test('it fetches the post and show a success message', async () => {
    render(<PostCard />);

    const loadingFeedback = await screen.findByRole('progressbar');

    const alertFeedback = await screen.findByRole('alert');
    expect(alertFeedback).toHaveTextContent(/^Post encontrado$/g);

    expect(loadingFeedback).not.toBeInTheDocument();

    await screen.findByText('Seu post');
  });

  test('it shows an internal server error message', async () => {
    // Mock the 500 response
    server.use(
      rest.get(`${config.baseURL}/posts/:postId`,
        (req, res, ctx) => res(ctx.status(500))),
    );

    render(<PostCard />);

    const loadingFeedback = await screen.findByRole('progressbar');

    const alertFeedback = await screen.findByRole('alert');
    expect(alertFeedback).toHaveTextContent(/^Erro interno$/g);

    expect(loadingFeedback).not.toBeInTheDocument();

    const postInformation = screen.queryByText('Seu post');
    expect(postInformation).toBeNull();
  });

  test('it shows a not found error message', async () => {
    // Mock the 404 response
    server.use(
      rest.get(
        `${config.baseURL}/posts/:postId`,
        (req, res, ctx) => res(ctx.status(404)),
      ),
    );

    render(<PostCard />);

    const loadingFeedback = await screen.findByRole('progressbar');

    const alertFeedback = await screen.findByRole('alert');
    expect(alertFeedback).toHaveTextContent(/^O post informado não foi encontrado$/g);

    expect(loadingFeedback).not.toBeInTheDocument();

    const postInformation = screen.queryByText('Seu post');
    expect(postInformation).toBeNull();
  });
});
