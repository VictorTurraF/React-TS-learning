import * as React from 'react';
import { CustomButton } from "./customButton";
import { render, fireEvent, screen, waitFor } from '@testing-library/react';

describe("Button component", () => {
	test("it shows the expected text when clicked (testing the wrong way!)", async () => {
		const buttonText = "SUBSCRIBE TO BASIC";

		const component = render(<CustomButton
			text={buttonText} />);

		fireEvent.click(screen.getByText(buttonText));

		await waitFor(() => {
			screen.getByRole("button");
		});

		expect(screen.getByRole("button")).toHaveTextContent(/^PROCEED TO CHECKOUT$/g);
	});
});