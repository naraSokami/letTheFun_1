import React from 'react';


const Article = (props) => {

    return (
        <div className="Article">
            <div className="img">
                <img src={props.src} alt="erreur au chargement de l'image" />
            </div>
            <div className="rect">
                <h3>{props.title}</h3>
                <p className="desc">{props.desc}</p>
                <button className="price" onClick={props.handleClick}>{props.price} $</button>
            </div>
        </div>
    )
}

export default Article; 