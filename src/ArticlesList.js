import React, { useState } from 'react';

function ArticleList(props) {

    return (
        <div className="chosenArticles">
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
        </div>
    )
}

export default ArticleList;