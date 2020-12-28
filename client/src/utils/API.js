import axios from "axios";
const url = "https://www.googleapis.com/books/v1/googleboks/resourceID?parameters";


export default {
    search: function(query) {
        return axios.get(url + query)
    }
}