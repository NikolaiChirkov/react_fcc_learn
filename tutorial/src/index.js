import React from 'react';
import ReactDOM from 'react-dom';
import { books } from './books';
import Book from './Book';
import { greeting } from './testing/testing';
import './index.css';

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}



ReactDOM.render(<BookList />, document.getElementById('root'));