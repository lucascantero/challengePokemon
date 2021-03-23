import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import Header from '../../components/header/Header';
import { useTranslation } from 'react-i18next';

const Pokemon = () => {

    const [data, setData] = useState({ abilities: [] });
    const { t } = useTranslation();

    let { id } = useParams();

    useEffect(() => {

        const getData = async () => {
            const response = await fetch(`/api/pokemon/${id}`);
            const dataAPI = await response.json();
            setData(dataAPI);
        }
        getData();
    }, []);

    return (
        <>
            <Header />
            <div className="pokemon__container">
                <div className="pokemon__wrapper">
                    <div className="pokemon__wrapper-catalogo">
                        <div className="pokemon__wrapper-img-title">
                            <div className="pokemon__wrapper-img">
                                <img src={data.img} className="pokemon__img" />
                            </div>
                            <div className="pokemon__wrapper-title">
                                <h1 className="pokemon__name">
                                    {data.name}
                                </h1>
                                {t("abilities")}:
                                <div className="pokemon__abailities">                           
                                {
                                    data.abilities.map(ability => (
                                        <h2 key={ability} className="pokemon__abaility"style={{padding:'10px'}}> 
                                            {ability}
                                        </h2>
                                    ))
                                }
                                </div>
                                <h3 className="pokemon__description">
                                    {t("description")}: {data.description}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon;