import axios from "axios";
const url = "https://www.googleapis.com/books/v1/volumes?q=";


export default {
    search: function(query) {
        return axios.get(url + query)
    }
}