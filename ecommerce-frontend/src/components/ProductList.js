import React, { useEffect, useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        console.log("Sending request to fetch products...");

        fetch('http://localhost:5000/api/product')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Received data:", data);
                setProducts(data);
            })
            .catch(error => console.error('Error fetching products:', error))
            .finally(() => setLoading(false));
    }, );

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <div key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
