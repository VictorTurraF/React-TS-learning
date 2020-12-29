import {rest} from 'msw';
import { setupServer } from 'msw/node'
import {cleanup, render, screen, waitFor} from '@testing-library/react';
import {PostCard} from './postCard';

const server = setupServer(
	rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				userId: 1,
				id: 1,
				title: "Test Title",
				body: "Test body"
			})
		);
	})
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterEach(cleanup);
afterAll(() => server.close())

describe("PostCard Component", () => {
	test("it fetches the post and show a success message", async ()=> {
		render(<PostCard />);

		expect(screen.getByRole('progressbar')).toBeInTheDocument();

		await waitFor(() => {
			screen.getByRole("alert");
		});

		expect(screen.getByRole('alert')).toHaveTextContent(/^Post encontrado$/g);
	});

	test("it shows an internal server error message", async ()=> {
		// Mock the 500 response
		server.use(
			rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
				return res(ctx.status(500));
			})
		)

		render(<PostCard />);
		console.log(screen.debug());

		expect(screen.getByRole('progressbar')).toBeInTheDocument();

		await waitFor(() => {
			screen.getByRole("alert");
		});

		expect(screen.getByRole('alert')).toHaveTextContent(/^Erro interno$/g);
	});

	test("it shows a not found error message", async ()=> {
		// Mock the 404 response
		server.use(
			rest.get('https://jsonplaceholder.typicode.com/posts/1', (req, res, ctx) => {
				return res(ctx.status(404));
			})
		)

		render(<PostCard />);
		console.log(screen.debug());

		expect(screen.getByRole('progressbar')).toBeInTheDocument();

		await waitFor(() => {
			screen.getByRole("alert");
		});

		expect(screen.getByRole('alert')).toHaveTextContent(/^O post informado não foi encontrado$/g);
	});

});
