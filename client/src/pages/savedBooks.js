import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/List/Container"
import Header from "../components/header/Header"
import Col from "../components/List/Col.js";
import Row from "../components/List/Row";

function savedBooks() {
    const [books, setBooks] = useContext(SavedBooksContext)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        const {data:books} = API.loadBooks()
        console.log(books)
        setbooks(books)
    }


    return (
        <>
        
        {books.map(data => {
            <div>
            <h4>title: {data.volumeInfo.title}</h4>
            <p>book ID: {data.id}</p>
            <img src={data.volumeInfo.imageLinks.smallThumbnail} />
            <p>{data.volumeInfo.description}</p>
            </div>
        })}
        
        </>
    )
}


