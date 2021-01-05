import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const urlById = "https://www.googleapis.com/books/v1/volumes/"

export default {
    search: function(query) {
        return axios.get(url + query)
    },
    searchById: function(query){
        return axios.get(urlById + query)
    },
    saveBook: books => {
        return axios.post("/api/books/new", books)
    },

    loadBooks: function() {
        return axios.get("/api/books/saved")
    },

    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}