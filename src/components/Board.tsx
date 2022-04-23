import { Component } from 'react';
import { Square } from './Square';

export class Board extends Component<Props, State> {
	public constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}

	private renderSquare(i: number) {
		return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
	}
}

interface Props {
	squares: string[];
	onClick: (i: number) => unknown;
}

interface State {
	squares: string[];
}
