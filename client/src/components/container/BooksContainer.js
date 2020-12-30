import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../List/Container"
import Header from "../header/Header"
import Col from "../List/Col.js";
import Row from "../List/Row";


function BookContainer (){
    const [search, setSearch] = useState({input: ""})
    const [resultArr, setResultArr] =useState([])

    function searchBooks (query){
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

    function handleInputChange (event){
        const {value, name} = event.target
        setSearch({[name]: value})
        console.log(search);
    }

    function handleFormSubmit (event) {
        event.preventDefault();
        searchBooks(search);
        
    }

    return(
        <Container>
            <Row>
            <Header />
            <input type="text" name="input" onChange={handleInputChange} className="form-control form-control-lg" placeholder="Search"></input>
            <button type="submit" onClick={handleFormSubmit} className="btn btn-primary mb-2">Search</button>
            {resultArr.map(data => {
                return (
                    <>
                <p>title: {data.volumeInfo.title}</p>
                    <p>book ID: {data.id}</p>
                    </>
                )
            })}
            </Row>
        </Container>
    )
}

export default BookContainer;