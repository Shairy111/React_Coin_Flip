import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlip.css'
import { randomize } from './helper';

class CoinFlip extends Component {
	static defaultProps = {
		coins: [
			{ side: 'heads', imgSrc: 'https://en.numista.com/catalogue/photos/pakistan/434-original.jpg' },
			{ side: 'tails', imgSrc: 'https://i.colnect.net/f/1255/253/5-Rupees-back.jpg' }
		]
	};
	constructor(props) {
		super(props);
		this.state = {
			currCoin: null,
			totalFlips: 0,
			totalHeads: 0,
			totalTails: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		const coin = randomize(this.props.coins);
		this.setState(currSt => {
			let newState = {
				...currSt,
				currCoin: coin,
				totalFlips: currSt.totalFlips + 1
			};
			if (coin.side === 'heads') {
				newState.totalHeads += 1;
			} else {
				newState.totalTails += 1;
			}

			return newState;
		});
	}
	handleClick() {
		this.flipCoin();
	}

	render() {
		return (
			<div className = "CoinFlip">
				{this.state.currCoin && <Coin info={this.state.currCoin} />}
				<p>
					out of {this.state.totalFlips} there were {this.state.totalHeads} heads and {this.state.totalTails}{' '}
					tails
				</p>
				<button onClick={this.handleClick}>Coin Flipper</button>
			</div>
		);
	}
}

export default CoinFlip;
