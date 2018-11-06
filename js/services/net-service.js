'use strict';

const API_KEY = 'AIzaSyBi6ra3hbtkJZKdyipozy54Ih8LB2gGsxw';

export const netService = {
    getBooks,

}

function getBooks(searchInput) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchInput}&key=${API_KEY}`)
}