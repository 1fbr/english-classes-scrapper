import jsdom from 'jsdom'
import { notifyByEmail } from './emailHandler.js'
import * as dotenv from 'dotenv'
dotenv.config()
const { JSDOM } = jsdom
const { URL, TEACHER_NAME } = process.env

const getData = () => {
  fetch(URL)
    .then(response => (response.ok) ? response.text() : Promise.reject(response))
    .then(data => checkData(data))
    .catch(err => console.log(err))
}

const checkData = (data) => {
  const { document } = (new JSDOM(data)).window
  const tableInfo = document.querySelector('tbody').textContent

  tableInfo.includes(TEACHER_NAME)
    ? notifyByEmail()
    : console.log('No class canceled expected')
}

getData()
