import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstBook = {
  img: 'data:image/jpeg;base64,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',
  title: 'Some Book from Google',
  author: 'Google.pictures'
};

const secondBook = {
  img: 'data:image/jpeg;base64,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',
  title: 'Another Book from Google',
  author: 'Whoever'
}

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img = {firstBook.img}
        title = {firstBook.title}
        author = {firstBook.author}>
          <p>lorem ipsum</p>
      </Book>
      <Book 
        img = {secondBook.img}
        title = {secondBook.title}
        author = {secondBook.author}/>
      <Book />
    </section>
  )
}

const Book = ( {img, title, author, children} ) => {
  
  return (
  <article className="book">
    <img src={img} alt="Book"/>
    <h1>{title}</h1>
    <h4 className="author">{author}</h4>
    {children}
  </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));