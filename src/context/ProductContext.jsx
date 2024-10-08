import React, { createContext, useState, useEffect } from 'react';
// khởi tạo context (toàn cục để quản lý)
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=5')
            .then(response => response.json())
            .then(data => setProducts(data.products));
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

// ! context : search gg , chat gpt : "prompt : Về câu hỏi, ngữ cảnh, đối tượng"

// ? redux : cửa hàng (cart , user, update avatar, sản phẩm yêu thích)

// ? firebase 

