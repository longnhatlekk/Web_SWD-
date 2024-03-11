import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { productData } from '../../../components/ProductConstant';
import './ListProduct.css';

const itemsPerPage = 5;

const ListProduct = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);

    // Use productData directly instead of useState
    const products = productData;

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const displayedProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleEdit = (productId) => {
        // Sử dụng navigate thay vì Link
        navigate(`/editproduct/${productId}`);
    };

    const handleDelete = (productId) => {
        console.log(`Delete product with ID: ${productId}`);
    };

    const handleAddProduct = () => {
        // Thêm logic để thực hiện hành động khi nút "Add Product" được nhấn
        console.log('Add Product button clicked');
    };

    return (
        <div className="product-list-container-all">
            <h2>List of Products</h2>

            <div className="product-list-container">
                <div className="product-list-container-button">
                    <button className="add-product" onClick={() => navigate('/addproduct')}>
                        + Add Product
                    </button>
                </div>
                <ul className="product-list">
                    {displayedProducts.map((product) => (
                        <li key={product.id} className="product-item">
                            <img src={product.imageUrl} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <span className="product-name">{product.name}</span>
                                <span className="product-quantity">{`Quantity: ${product.quantity}`}</span>
                            </div>
                            <div className="product-buttons">
                                <button className="edit" onClick={() => handleEdit(product.id)}>
                                    Edit
                                </button>
                                <button className="delete" onClick={() => handleDelete(product.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <ReactPaginate
                    pageCount={Math.ceil(products.length / itemsPerPage)}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
};

export default ListProduct;
