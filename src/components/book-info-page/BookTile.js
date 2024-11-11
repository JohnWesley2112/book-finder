import React from 'react';
import Book from './Book.jsx';
import './BookTile.css';
import { useGlobalContext } from '../../api/BookDataProvider';
import coverImg from "../../assets/cover_not_found.jpg";
import { ReactComponent as Loading } from "../../assets/loader.svg";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookTile = () => {
    const { books, loading, resultTitle } = useGlobalContext();
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            // removing /works/ to get only id
            id: (singleBook.id).replace("/works/", ""),

            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }
    });

    if (loading) return <Loading />;

    return (
        <div className='book-tile-container'>
            <div className="book-tile-wrapper">
                <div className='result-banner'>
                    <h2>{resultTitle}</h2>
                </div>
                <div className='booklist-grid'>
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BookTile