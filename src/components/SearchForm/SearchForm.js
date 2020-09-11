import React from "react";

export default function SearchForm({ fetchNewsApiData }) {
    function handleSubmit(event) {
        event.preventDefault();
        let searchTerm = event.target[0].value;
        let sortType = event.target[1].value;
        fetchNewsApiData(searchTerm, sortType);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='searchTerm'
                    aria-label='Search Bar'
                    placeholder='Type Some Keywords'></input>

                <select name='sort' aria-label='Sort By'>
                    <option value=''>Sort Articles</option>
                    <option value='publishedAt'>Date</option>
                    <option value='relevancy'>Relevance</option>
                    <option value='popularity'>Popularity</option>
                </select>
                <input
                    aria-label='Search Button'
                    type='Submit'
                    defaultValue='Search'></input>
            </form>
        </div>
    );
}
