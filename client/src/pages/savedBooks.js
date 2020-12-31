import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/List/Container"
import Header from "../components/header/Header"
import Col from "../components/List/Col.js";
import Row from "../components/List/Row";

function SavedBooks() {
    const [books, setBooks] = useState({});

    useEffect(() => {
        API.loadBooks()
        .then(res => {
            setBooks(res.data.items)
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
        
        {books.map(data => {
            return(
            <div>
            <h4>title: {data.volumeInfo.title}</h4>
            <p>book ID: {data.id}</p>
            <img src={data.volumeInfo.imageLinks.smallThumbnail} />
            <p>{data.volumeInfo.description}</p>
            </div>
            )
        })}
        
        </>
    )
}

export default SavedBooks;

