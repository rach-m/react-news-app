import React from "react";
import CardImage from "../CardImage/CardImage";
import CardText from "../CardText/CardText";
import "./CardContainer.css";

export default function CardContainer({
    urlToImage,
    title,
    publishedAt,
    description,
    url,
}) {
    return (
        <div id='cardContainer'>
            <CardImage urlToImage={urlToImage} />
            <CardText
                title={title}
                publishedAt={publishedAt}
                description={description}
                url={url}
            />
        </div>
    );
}
