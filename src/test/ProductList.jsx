import React, { useContext, useState, useMemo } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductItem from './ProductItem';
import './ProductList.css';

const ProductList = () => {
    const products = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');

    // Sử dụng useMemo để memoize danh sách sản phẩm sau khi lọc
    const filteredProducts = useMemo(() => {
        return products.filter(product =>
            (product.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (product.description || '').toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="product-list-container">
            <h2>Danh Sách Sản Phẩm</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {filteredProducts.length === 0 ? (
                <p className="no-results">Không tìm thấy sản phẩm nào.</p>
            ) : (
                <div>
                    {
                        filteredProducts.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default ProductList;
