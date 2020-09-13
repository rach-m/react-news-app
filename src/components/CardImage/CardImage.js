import React from "react";
import "./CardImage.css";

export default function CardText({ urlToImage }) {
    return (
        <div id='imageContainer'>
            <img id='cardImage' src={urlToImage} alt=''></img>
        </div>
    );
}
