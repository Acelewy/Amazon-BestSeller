import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
	{
	id: 1,
	img : "https://images-na.ssl-images-amazon.com/images/I/91bgFzUdDcL._AC_UL200_SR200,200_.jpg",
	title : 'Welcome to Kindergaton',
	author : 'D.J Steinberg'

},
{
	id: 2,
	img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
	title: 'Love you too',
	author: 'Amelia Hepworth',
},
{
	id: 3,
	img: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
	title: 'The Very Hungry Caterpillar',
	author: 'Eric Carle',
}


]

function BookList(){
 return (
		<section className="booklist">
			{books.map((book)=>{
				return (
					<Book key={book.id} book={book}></Book>
				);

		})}
			
		</section>
 );
}

const Book = (props) =>{
	const {img, title, author} = props.book;
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{props.children}
		
		</article>
	);
}



ReactDom.render(<BookList/>, document.getElementById('root'));