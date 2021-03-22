import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ dato }) => {

    return (
        <li className="card__li">
            <Link className="card__link" to={`/pokemon/${dato.id}`}>
                <div className="card__wrapper">               
                    <img src={dato.img} alt="pokemon" className="card__img" />
                    <h1 className="card__name">
                        {dato.name}
                    </h1>
                </div>
            </Link>
        </li>
    )
}

export default Card;