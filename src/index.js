require('dotenv').config()
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getData = () => {
      fetch(process.env.URL)
        .then(response => (response.ok) ? response.text() : Promise.reject())
        .then(data => checkData(data)) 
        .catch(err => console.log(err)) 
}

const checkData = (data) => {
    const { document } = (new JSDOM(data)).window;
    const tableInfo = document.querySelector('tbody').textContent
    
    tableInfo.includes(process.env.TEACHER_NAME) 
        ? console.log("Class canceled") 
        : console.log("No class canceled expected")
}

getData()

