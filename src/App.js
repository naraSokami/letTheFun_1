import './App.css';
import React from 'react';
import Article from './Article.js';
import Navbar from './Navbar.js';

const articles = [];
const articlesQuantity = 8;


function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * max + min)
}

class Art {
	constructor(title, desc = 'description of the super good ultra-4K product from our only and beeeeest e-shop', price = randomNumber(100), src = './img/img01.jpg') {
		this.title = title;
		this.desc = desc;
		this.price = price;
		this.src = src;
	}
}

for (let i = 0; i < articlesQuantity; i++) {
	articles.push(new Art("article " + (i + 1)));
}

console.log(articles);


// UTIL

function convertToNumber(str) {
	return parseInt(str.replace(' $', ''))	
}


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { buy: 0, counter: 0 }
		this.buyEvent = this.buyEvent.bind(this);
	}


	buyEvent({ target }) {
		this.setState({ buy: this.state.buy += convertToNumber(target.innerHTML), counter: this.state.counter += 1 })
		console.log(this.state.counter);
	}

	render() {
		return (
			<div className="App">
				<Navbar cart={this.state.buy} counter={this.state.counter}/>
				<div className="articles">
					{articles.map((article) => (
						<Article title={article.title} desc={article.desc} src={article.src} price={article.price} handleClick={this.buyEvent} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
