// AddProduct.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'; // Import CSS file

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        quantity: 0,
        price: 0,
        imageUrl: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleAddProduct = () => {
        // Đây là nơi bạn có thể gửi dữ liệu sản phẩm mới lên server hoặc cập nhật Redux store
        console.log('Product added:', product);
        // Sau khi thêm sản phẩm, chuyển hướng đến trang danh sách sản phẩm
        navigate('/listproduct');
    };

    return (
        <div className="add-product-container">
            <h2>Add Product</h2>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input type="text" id="name" name="name" value={product.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={product.quantity}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={product.price} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="imageUrl">Image URL:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={product.imageUrl}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

export default AddProduct;
