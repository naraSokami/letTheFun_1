import './App.css';
import React from 'react';
import Article from './Article.js';
import Navbar from './Navbar.js';
import ArticlesList from './ArticlesList.js';

const articles = [];
const articlesQuantity = 8;


function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * max + min)
}

class Art {
	constructor(title, id, desc = 'description of the super good ultra-4K product from our only and beeeeest e-shop', price = randomNumber(100), src = './img/img01.jpg') {
		this.title = title;
		this.id = id;
		this.desc = desc;
		this.price = price;
		this.src = src;
	}
}

for (let i = 0; i < articlesQuantity; i++) {
	articles.push(new Art("article " + (i + 1), i));
}

console.log(articles);


// UTIL //

function convertToNumber(str) {
	return parseInt(str.replace(' $', ''))	
}

function _id(_id) {
	return parseInt(_id.replace('_', ''))
}


class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { buy: 0, counter: 0, chosenArticles: [] }
		this.buyEvent = this.buyEvent.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}


	buyEvent({ target }) {
		const id = _id(target.getAttribute('id'))
		this.setState({ buy: this.state.buy += convertToNumber(target.innerHTML), 
						counter: this.state.counter += 1, 
						chosenArticles: this.state.chosenArticles = [...this.state.chosenArticles, {returnId: this.state.counter - 1, ...articles[id]}]})
		console.log(this.state.chosenArticles);
	}


	handleDelete(event) {
		event.stopPropagation();
		const chosenArticle = event.target.parentElement.parentElement;
		console.log(chosenArticle);
		const returnId = chosenArticle.getAttribute('returnId');
		this.setState({ buy: this.state.buy -= chosenArticle.getAttribute('price'),
						chosenArticles: this.state.chosenArticles = this.state.chosenArticles.filter((article, index) => {
							return returnId != article.returnId; 
						}), counter: this.state.counter -= 1});	
		console.log(this.state.chosenArticles)


		// chosenArticle.remove()
	}



	render() {
		return (
			<div className="App">
				<Navbar cart={this.state.buy} counter={this.state.counter}/>
				<ArticlesList chosenArticles={this.state.chosenArticles} onDelete={this.handleDelete}/>
				<div className="articles">
					{articles.map((article) => (
						<Article id={article.id} title={article.title} desc={article.desc} src={article.src} price={article.price} handleClick={this.buyEvent} />
					))}
				</div>
			</div>
		);
	}
}

export default App;
