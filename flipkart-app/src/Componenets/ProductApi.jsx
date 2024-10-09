import React, { useState, useEffect } from 'react';

const ProductApi = (props) => {
    let index = Number(props.index);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    let imgUrl;
    const isValidIndex = data.length > 0 && index >= 0 && index < data.length;

    if (isValidIndex) {
        let notValidurl = data[index].images[0];
        imgUrl = notValidurl.replace(/[\[\]"]/g, '');
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            {isValidIndex ? (
                <div className="product-card">
                    <img className="product-card__image" src={imgUrl} alt="Product" />
                    <div id='details'>
                        <p className="product-card__description">Name: {data[index].description}</p>
                        <p className="product-card__price">Price: {data[index].price}</p>
                    </div>
                </div>
            ) : (
                <p>No data available or invalid product index.</p>
            )}
        </>
    );
}

export default ProductApi;
