import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/List/Container"
import Header from "../components/header/Header"
import Col from "../components/List/Col.js";
import Row from "../components/List/Row";


function BookContainer() {
    const [search, setSearch] = useState({ input: "" })
    const [resultArr, setResultArr] = useState([])

    function searchBooks(query) {
        // console.log(query)
        API.search(query.input)
            .then(res => {
                console.log(res.data)
                console.log(resultArr)
                setResultArr(res.data.items);
            }).catch(err => {
                console.log(err)
            })
    };

    function saveBook(id) {
        API.saveBook(id)
        
    }

    function handleInputChange(event) {
        const { value, name } = event.target
        setSearch({ [name]: value })
        console.log(search);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        searchBooks(search);

    }

    return (
        <Container>
            <Row>
                <Header />
                <input type="text" name="input" onChange={handleInputChange} className="form-control form-control-lg" placeholder="Search"></input>
                <button type="submit" onClick={handleFormSubmit} className="btn btn-primary mb-2">Search</button>
                {resultArr.map(data => {
                    return (
                        <Col size="md-6">
                            <h4>title: {data.volumeInfo.title}</h4>
                            <p>book ID: {data.id}</p>
                            <img src={data.volumeInfo.imageLinks.thumbnail} />
                            <p>{data.volumeInfo.description}</p>
                            <button>View</button>
                            <button onClick={() => saveBook({data:data.search})}>Save</button>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default BookContainer;