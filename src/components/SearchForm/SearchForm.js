import React from "react";
import "./SearchForm.css";

export default function SearchForm({ fetchNewsApiData }) {
    /* 
    This function handles the form's submit event. 
    It pulls the search term and sortType from the form data and passes it to 
    the fetchNewsApiData function which lives in App.js. 
     */
    function handleSubmit(event) {
        event.preventDefault();
        let searchTerm = event.target[0].value;
        let sortType = event.target[1].value;
        fetchNewsApiData(searchTerm, sortType);
    }

    return (
        <div id='searchContainer'>
            <form id='formContainer' onSubmit={handleSubmit}>
                <input
                    className='searchInput'
                    id='searchBar'
                    type='text'
                    name='searchBar'
                    aria-label='Search Bar'
                    placeholder='Type Some Keywords'></input>

                <select
                    id='sortInput'
                    className='searchInput'
                    name='sort'
                    aria-label='Sort By'>
                    <option value=''>Sort Articles</option>
                    <option value='publishedAt'>Date</option>
                    <option value='relevancy'>Relevance</option>
                    <option value='popularity'>Popularity</option>
                </select>
                <input
                    id='searchButton'
                    aria-label='Search Button'
                    type='Submit'
                    defaultValue='Search'></input>
            </form>
        </div>
    );
}
