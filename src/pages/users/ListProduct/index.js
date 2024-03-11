import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import './ListProduct.css';

const itemsPerPage = 5;

const ListProduct = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Pizza',
            quantity: 10,
            imageUrl:
                'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/cach_lam_banh_pizza_thom_ngon_chuan_nha_hang_2_43d4f180fd.png',
        },
        {
            id: 2,
            name: 'Pizza 2',
            quantity: 5,
            imageUrl:
                'https://cdn.tgdd.vn/2021/09/CookDish/cach-bao-quan-pizza-de-banh-pizza-va-cach-ham-nong-banh-pizza-avt-1200x676.jpg',
        },
        {
            id: 3,
            name: 'Burger',
            quantity: 8,
            imageUrl:
                'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg',
        },
        {
            id: 4,
            name: 'Pasta',
            quantity: 15,
            imageUrl: 'https://www.huongnghiepaau.com/wp-content/uploads/2019/01/cac-loai-pasta.jpg',
        },
        {
            id: 5,
            name: 'Salad',
            quantity: 12,
            imageUrl: 'https://www.thatlangon.com/wp-content/uploads/2021/09/unnamed.jpg',
        },
        {
            id: 6,
            name: 'Sandwich',
            quantity: 7,
            imageUrl:
                'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/mach_ban_6_cach_lam_banh_mi_sandwich_day_du_dinh_duong_1_8756a3e8e2.png',
        },
        {
            id: 7,
            name: 'Sushi',
            quantity: 20,
            imageUrl: 'https://satovietnhat.com.vn/Upload/images/sushi-mon-an-noi-tieng-nhat-ban-co-tu-khi-nao-4.jpg',
        },
        { id: 8, name: 'Steak', quantity: 9, imageUrl: 'https://cdn.tgdd.vn/2020/11/CookProduct/1-1200x676-22.jpg' },
        {
            id: 9,
            name: 'Ice Cream',
            quantity: 18,
            imageUrl:
                'https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg',
        },
        {
            id: 10,
            name: 'Smoothie',
            quantity: 14,
            imageUrl: 'https://cdn.tgdd.vn/2020/07/CookRecipe/GalleryStep/thanh-pham-485.jpg',
        },
    ]);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const displayedProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleEdit = (productId) => {
        console.log(`Edit product with ID: ${productId}`);
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
                    <Link to="/addproduct" className="add-product">
                        + Add Product
                    </Link>
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
                                <Link to={`/editproduct/${product.id}`} className="edit">
                                    Edit
                                </Link>
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
