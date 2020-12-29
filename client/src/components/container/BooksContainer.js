import React, { Component } from "react";
import API from "../../utils/API";


class BookContainer extends Component {
    state = {
        result: {},
        search: ""
    };

    searchBooks = query => {
    API.search(query)
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDrfault();
        this.searchBooks(this.state.search)
    }
}

export default BookContainer;