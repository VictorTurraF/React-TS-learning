import React from "react";

interface CustomButtonProps {
	text: string,
}

interface CustomButtonState {
	text: string,
}

export class CustomButton extends React.Component<CustomButtonProps, CustomButtonState> {
	constructor(props: CustomButtonProps) {
		super(props);
		this.state = { text: "" };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(() => {
			return { text: "PROCEED TO CHECKOUT" };
		});
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.text || this.props.text}
			</button>
		);
	}
}