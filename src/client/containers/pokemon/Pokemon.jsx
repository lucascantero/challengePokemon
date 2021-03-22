import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

const Pokemon = () => {

    const [data, setData] = useState([]);

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

        </>
    )
}

export default Pokemon;