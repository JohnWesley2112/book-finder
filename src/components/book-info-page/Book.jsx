import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

function Book(book) {

    // Individual book-wrapper
    return (
        <div className='book-wrapper'>
            <div className='cover-img'>
                <img src={book.cover_img} alt="cover" />
            </div>
            <div className='book-item-info'>
                {/* Title */}
                <Link className='link-tag' to={`http://openlibrary.org//book/${book.id}`} {...book}>
                    <div>
                        <span className='book-title text-capitalize'>{book.title}</span>
                    </div>
                </Link>

                {/* Author name */}
                <div className=''>
                    <span className='book-author text-capitalize'>By: </span>
                    <span className='book-author text-capitalize'>{book.author}</span>
                </div>

                {/* Total edition count */}
                <div>
                    <span className='text-capitalize'>Total Editions: </span>
                    <span className='text-capitalize'>{book.edition_count}</span>
                </div>

                {/* Year of Publish */}
                <div>
                    <span className='text-capitalize'>First Publish Year: </span>
                    <span className='text-capitalize'>{book.first_publish_year}</span>
                </div>

            </div>
        </div>
    )
}

export default Book