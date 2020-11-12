import React, { useState } from 'react';
import { Product } from './Product';
import Carousel from './Carousel';


export const Products = (props) => {
    const { products } = props;
    const [selectedProduct, setSelectedProduct] = useState(null);
    const onSelectProduct = (prod) => {
        setSelectedProduct(prod);
    }
    const list = products.map(product => <Product onSelectProduct={onSelectProduct} key={product.id} product={product} />);
    return (
        <React.Fragment>
            <div className="flex-grid">
                {list}
            </div>
            {
                selectedProduct && selectedProduct.images.length > 0 &&
                <div className="carousel-layout">
                    <span className="close" onClick={() => setSelectedProduct(null)}>&times;</span>
                    <Carousel slides={selectedProduct.images} />
                    <div className="overlay">  </div>
                </div>
            }
        </React.Fragment>
    );
}


