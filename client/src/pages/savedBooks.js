import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/List/Container"
import SavedHeader from "../components/header/SavedHeader"
import Col from "../components/List/Col.js";
import Row from "../components/List/Row";
import { Button } from "reactstrap";
import DeleteBtn from "../components/DeleteBtn/index"


function SavedBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.loadBooks()
        .then(res => {
            console.log(res)
            setBooks(res.data)

        }).catch(err => {
            console.log(err)
        })
    }

    function deleteBook(id) {
        console.log(id)
        API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));

    }
  

   

    return (
        <>
            <Container>
                <SavedHeader />

                {books.length ? (
                    <div>
                        {books.map(data => {
                            return (
                                <div>

                                    <Row>
                                    </Row>
                                    <Row>

                                        <Col size="md-3">
                                            <h4>title: {data.title}</h4>
                                            <h4>Author: {data.author}</h4>
                                            <img src={data.image} />
                                        </Col>
                                        <Col size="md-6">
                                            <p>{data.description}</p>

                                        </Col>
                                        <Col size="md-2">
                                            <Button type="button" onClick={(e) => { window.location.href = data.link }}>View</Button>
                                            <Button onClick={() => deleteBook(data._id)}>Delete</Button>


                                        </Col>
                                    </Row>
                                </div>


                            )
                        })}
                    </div>
                ) : (
                        <h3 className="text-center">No saved books</h3>
                    )}
            </Container>

        </>
    )
}

export default SavedBooks;

