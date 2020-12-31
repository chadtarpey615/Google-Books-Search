import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    search: function(query) {
        return axios.get(url + query)
    },

    saveBook: books => {
        return axios.post("api/books", books)
    },

    loadBooks: function() {
        return axios.get("api/books")
    }
}