import React from 'react';

export const Product = ({ onSelectProduct, product }) => {
    const { name, reviews, price, thumbnail } = product;
    const { regular, selling } = price || {};
    const { href, alt } = thumbnail;
    const { averageRating, reviewCount } = reviews;
    return (
        <div className="col">
            <figure onClick={() => onSelectProduct(product)}>
                <img src={href} alt={alt} />
                <figcaption>{name}</figcaption>
                <div className="product-details">
                    <span>${regular || 0}</span>
                    <span>Reviews {averageRating}/{reviewCount}</span>
                </div>
            </figure>
        </div>
    );
}


