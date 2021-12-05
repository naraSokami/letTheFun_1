import React, { useState } from 'react';

function ArticleList(props) {

    const [isExpanded, setIsExpanded] = useState("nonExpanded")

    const handleClick = (event) => {
        console.log(event)
        event.isConnected = false;
        event.stopPropagation();
        setIsExpanded((prev) => {
            return prev === "expanded" ? "nonExpanded" : "expanded";
        })
        console.log(isExpanded)
    }

    return (
        <div className={"chosenArticles " + isExpanded} onClick={handleClick}>
            {props.chosenArticles.map(article => (
                <div className="chosenArticle" returnId={article.returnId} price={article.price}>
                    <div className="img">
                        <img src={article.src} alt="" />
                    </div>
                    <h4>{article.title}</h4>
                    <p>{article.price} $</p>
                    <button onClick={props.onDelete}><i class="fas fa-trash-alt"></i></button>
                </div>
            ))}
            <i class="fas fa-shopping-bag"></i>
        </div>
    )
}

export default ArticleList;