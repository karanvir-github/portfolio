import React from 'react'
import Navbar from '../utils/Navbar';
import Container from 'react-bootstrap/Container';
import '../css/reviews.css';
import { useState, useEffect } from 'react';
import ReviewService from '../services/review-service';
import $ from 'jquery';

function Reviews() {

    function getAllReviews() {
        ReviewService.getReviewData().then((response) => {
            createReviewData(response.data)
        })
    };

    useEffect(() => {
        getAllReviews()
        createReviewData()
    }, [])

    const [reviews, setReviews] = useState([])
    function createReviewData(data) {
        let html = ''
        $.each(data, function (i, d) {
            let randomColor = getRandomColor()
            let htmlForIcon = createLogoWithInitial(d.reviewerName, randomColor)
            html += '<div class="row review-row"><div class="col-xs-12 col-md-3 col-lg-3 my-auto" style="text-align: center !important";"><div class="initialLogo">' + htmlForIcon + '</div><div class="name">' + d.reviewerName + '</div></div> <div class="col-xs-12 col-md-9 col-lg-9 my-auto review"><div class="review-data"><strong>' + d.review + '</strong></div></div></div>';
        })
        setReviews(html);
    }
    function getRandomColor() {
        let data = 'abcdef0123456';
        let color = '#'
        let i = null
        while (color.length < 7) {
            i = Math.random() * data.length
            color += data.charAt(i)
        }
        return color
    }
    function createLogoWithInitial(name, randomColor) {
        let arr = name.split(" ")
        name = arr[0].slice(0, 1)
        if (arr.length > 1) {
            name += arr[1].slice(0, 1)
        }
        let html = '<h4 style="background-color:' + randomColor + '; margin:auto; height: 70px; color: #fff; width: 70px; border-radius: 50%; align-items: center; display: flex; justify-content: center; font-size: 35px; ">' + name.toUpperCase() + '</h4>';
        return html;
    }

    return (
        <>
            <Navbar />
            <Container fluid>
                <div className='main-row'>
                    <div className='heading' style={{ padding: "10px" }}>
                        <h3>Reviews</h3>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: reviews }} />
                </div>
            </Container>
        </>
    );
}
export default Reviews;