import { Component } from 'react';

export class Square extends Component<Props, State> {
	public constructor(props: any) {
		super(props);

		this.state = {
			value: null,
		};
	}

	public render() {
		return (
			<button className="square" onClick={() => this.props.onClick()}>
				{this.props.value}
			</button>
		);
	}
}

interface Props {
	value: string;
	onClick: () => unknown;
}

interface State {
	value: string | null;
}
