import React from "react";
import "./CardText.css";

export default function CardText({ title, description, publishedAt, url }) {
    // Formatting the date coming from the API so it's easily read by the user
    function formatDate(date) {
        return `Published: ${new Date(date).toLocaleDateString()}`;
    }
    return (
        <div id='textContainer'>
            <h3 id='cardTitle'>{title}</h3>
            <h5>{formatDate(publishedAt)}</h5>
            <p id='cardDescription'>{description}</p>
            <a
                href={url}
                target='_blank'
                aria-label="Link to article's site of origin for the full article">
                <button id='cardButton' aria->
                    Read More
                </button>
            </a>
        </div>
    );
}
