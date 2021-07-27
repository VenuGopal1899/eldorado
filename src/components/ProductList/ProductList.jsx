import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Pagination from '../AdminProductDetails/Pagination';
import { productsDetail } from './../../utils/ProductListUtil';
import './ProductList.css';

const ProductList=(props)=> {
    const[currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(9);

    //Get current posts
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;
    const currentPosts=productsDetail.slice(indexOfFirstPost,indexOfLastPost); 

    // Change page
    const paginate =(number) =>setCurrentPage(number);

    const product=(productData)=>
    {
        return(
            <div className="thumbnail">
                <Col className="center" xs={6} md={4}>
                <Image  src={productData.imageUrl} thumbnail />
                </Col>
                <p>Name :{productData.name}</p>
                <p>Price :{productData.price}</p>
            </div>
            
        );
        
    };
    return (
        <div>
            <Container>
                <Row>
                {currentPosts.map(product)}
                </Row>
                <Pagination
                postsPerPage={postsPerPage}
                totalPosts={productsDetail.length}
                paginate={paginate}
                />
            </Container>
            
        </div>
        
        
    );
}

export default ProductList;