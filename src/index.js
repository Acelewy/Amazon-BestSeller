import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from './books'


function BookList(){
 return (
		<section className="booklist">
			{books.map((book)=>{ 
				return (
					<Book key={book.id}{...book}></Book>
				);

		})}
			
		</section>
 );
}

const Book = (props) =>{
	const {img, title, author} = props;
	//attribute, eventHandler
	// onClick, onMouseOver
	const clickHandler = () => {
		alert('Hello World');

	};
	const complexExample = (author) => {
		console.log(author)
	};
	return (
		<article className="book" onMouseOver={ ()=>{
			console.log(title)
		}}>
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>example</button>
		 	<button type="button" onClick={() => complexExample(author)}>More complex</button>
		</article>
	);
}



ReactDom.render(<BookList/>, document.getElementById('root'));