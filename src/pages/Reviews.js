import React from 'react'
import Navbar from '../utils/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/reviews.css';
import { useState, useEffect } from 'react';
import { BsFillStarFill } from 'react-icons/bs';


function Reviews() {
    let name = "KS"
    let [randomColor, setRandomcolor] = useState("")

    const getRandomColor = () => {
        let data = 'abcdef0123456';
        let color = '#'
        let i = null
        while (color.length < 7) {
            i = Math.random() * data.length
            color += data.charAt(i)
        }
        return color
    }

    const createLogoWithInitial = (name, randomColor) => {
        let html = '<h4 style="background-color:' + randomColor + '; margin:auto; height: 70px; color: #fff; width: 70px; border-radius: 50%; align-items: center; display: flex; justify-content: center; font-size: 35px; ">' + name + '</h4>';
        return html;
    }

    let dataForlogo = []
    let [rowData, setRowData] = useState('')

    useEffect(() => {
        let randomColor = getRandomColor();
        let htmlForIcon = createLogoWithInitial(name, randomColor)
        let arr = []
        arr['logo'] = htmlForIcon;
        arr['review'] = "Nice !!";
        dataForlogo.push(arr);
        dataForlogo.forEach(data => rowData += '<div class="row review-row"><div class="col-xs-12 col-md-3 col-lg-3 my-auto" style="text-align: center !important";"><div class="initialLogo">' + data.logo + '</div><div class="name">Karanvir Singh</div></div> <div class="col-xs-12 col-md-9 col-lg-9 my-auto review"><div class="review-data"><strong>' + data.review + '</strong></div></div></div>');
        setRowData(rowData);
    }, []);

    return (
        <>
            <Navbar />
            <Container fluid>
                <div className='main-row'>
                    <div className='heading' style={{ padding: "10px" }}>
                        <h3>Reviews</h3>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: rowData }} />
                </div>
            </Container>
        </>
    );
}
export default Reviews;