import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// url for fetching books
const URL = "https://openlibrary.org/search.json?title=";
// Context Api
const AppContext = React.createContext();

const BookDataProvider = ({ children }) => {

    // State to handle user entered ketwords
    const [searchTerm, setSearchTerm] = useState("jurassic park");

    // State to handle Fetched data
    const [books, setBooks] = useState([]);

    // State to handle Loading State of component
    const [loading, setLoading] = useState(true);

    // State to handle Result Message
    const [resultTitle, setResultTitle] = useState("");

    // Using useCallBack to avoid unnecesary re-renders
    const fetchBooks = useCallback(async () => {
        setLoading(true);

        try {
            // Fetching data
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            // De-structuring and obtaining necessary data
            const { docs } = data;


            if (docs) {
                // Taking only 20 elements for displaing.
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
                    // getting specific key and values
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                // Setting the data in the Global-State
                setBooks(newBooks);

                // Setting Result message
                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                // Error Handling
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, BookDataProvider };