import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/List/Container"
import Header from "../components/header/Header"
import Col from "../components/List/Col.js";
import Row from "../components/List/Row";
import { Button } from "reactstrap";


function SavedBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        API.loadBooks()
        .then(res => {
            console.log(res)
            setBooks(res.data)

        }).catch(err => {
            console.log(err)
        })
    }, [])

    // function loadBooks() {
    //     API.loadBooks()
    //     .then(res => {
    //         setBooks(res.data.items)
    //     }).catch(err => {
    //         console.log(err)
    //     })
        
    //}
    // function searchBooks(query) {
    //     // console.log(query)
    //     API.search(query.input)
    //         .then(res => {
    //             console.log(res.data)
    //             console.log(resultArr)
    //             setResultArr(res.data.items);
    //         }).catch(err => {
    //             console.log(err)
    //         })
    // };

    return (
        <>
        <div>
            {books.length ? (
                <div>
                {books.map(data => {
                    return(
                    <div>

                    <Row>
        <Header/>
                        </Row>
                        <Row>

                        <Col size="md-3">
                    <h4>title: {data.title}</h4>
                    <h4>Author: {data.author}</h4>
                    <img src={data.image}/>
                    </Col>
                        <Col size="md-6">
                    <p>{data.description}</p>

                    </Col>
                    <Col size="md-2">
                    <Button type="button" onClick={(e) => { window.location.href = data.link }}>View</Button>

                    </Col>
                    </Row>
                    </div>


                    )
                })}
                </div>
            ): (
                <h3 className="text-center">No saved books</h3>
            )}
        </div>
        
        hi
        </>
    )
}

export default SavedBooks;

