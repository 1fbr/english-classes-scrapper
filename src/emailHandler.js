require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth:{
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.ACCOUNT_PASSWORD
    }
})

const notifyByEmail = () => {
  try {
    transporter.sendMail({
      from: `${process.env.ORGANIZATION_NAME} < ${process.env.GMAIL_ACCOUNT}>`,
      to: process.env.GMAIL_ACCOUNT, 
      subject: 'About the following class',
      text: `The following class with ${process.env.TEACHER_NAME} is expected to be canceled.`,
    })    
    console.log('Class canceled, email sent.')
  } catch (error) {
    console.log(error)
  }
}

module.exports = { notifyByEmail }


