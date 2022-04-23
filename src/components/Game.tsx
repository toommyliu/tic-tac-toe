import { Component } from 'react';
import { Board } from './Board';

const lines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function calculateWinner(squares: string[]): string | null {
	for (let i = 0; i < lines.length; ++i) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	return null;
}

export class Game extends Component<{}, State> {
	public state: State = {
		history: [
			{
				squares: Array(9).fill(null),
			},
		],
		stepNumber: 0,
		xIsNext: true,
	};

	public render() {
		const { history, stepNumber } = this.state;
		const current = history[stepNumber];
		const winner = calculateWinner(current.squares);

		const moves = history.map((_, move) => {
			const msg = move ? `Go to move #${move}` : 'Go to game start';
			return (
				<li key={move}>
					<button onClick={() => this.jumpTo(move)}>{msg}</button>
				</li>
			);
		});

		let status: string = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		if (winner) {
			status = `Winner: ${winner}`;
		}

		return (
			<div className="game">
				<div className="game-board">
					<Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}

	private handleClick(i: number) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([
				{
					squares,
				},
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
		});
	}

	private jumpTo(step: number) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	}
}

interface State {
	history: {
		squares: string[];
	}[];
	stepNumber: number;
	xIsNext: boolean;
}
