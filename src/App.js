import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm/SearchForm";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
    let [newsArticles, setNewsArticles] = useState();

    async function fetchNewsApiData(searchQuery, sortType) {
        let sortingMethod = sortType === "none" ? "" : `&sortBy=${sortType}`;
        let newsData = await axios.get(
            `https://newsapi.org/v2/everything?q=${searchQuery}${sortingMethod}&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setNewsArticles(newsData.data.articles);
    }

    return (
        <div className='App'>
            <SearchForm fetchNewsApiData={fetchNewsApiData} />
            {newsArticles
                ? newsArticles.map((article, index) => {
                      return <CardContainer key={index} article={article} />;
                  })
                : null}
        </div>
    );
}

export default App;
