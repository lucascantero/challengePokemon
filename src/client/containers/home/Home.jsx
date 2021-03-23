import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card'
import { useTranslation } from 'react-i18next';
import Header from '../../components/header/Header'

const Home = () => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        getData();
    }, [offset]);

    const getData = async () => {

        const response = await fetch(`/api/pokemon?offset=${offset}`);
        const dataAPI = await response.json();
        setData(dataAPI);
    }

    return (
        <>
            <Header />
            <div className="home__contenedor">
                <div className="home__wrapper">
                    <ul className="home__ul">
                        {
                            data.map(element => (
                                <Card key={element.name} dato={element} />
                            ))
                        }
                    </ul>
                    <div className="home__groupButton">
                        <button className="home__button" disabled={!offset} onClick={() => setOffset(offset - 5)}>
                            {t('previous')}
                        </button>
                        <button className="home__button" onClick={() => setOffset(offset + 5)}>
                            {t('next')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;