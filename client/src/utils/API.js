import axios from "axios";

export default {
fetchBooks: function(q) {
return axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + q)
    .then (res => {
        const books = res.data;
        return books
    })


}


    }