import React, { useEffect, useRef } from 'react';
import './SearchSection.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../api/BookDataProvider'
import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';

function SearchSection() {

    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    useEffect(() => searchText.current.focus(), []);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tempSearchTerm = searchText.current.value.trim();

        if ((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {
            setResultTitle("Please Enter Something ...");
            toast.error("Please Enter Something ...");
        } else {
            setSearchTerm(searchText.current.value);
        }
        navigate("/books");
    };
    return (
        <div className='component-container'>

            <div className='search-component-wrapper'>

                <div className="input-wrapper">
                    <input ref={searchText} placeholder='Enter book title' name='title' id='title' type="text" />
                    <button onClick={handleSubmit}>Search</button>
                </div>
            </div>

        </div>
    )
}

export default SearchSection