import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()
const { ORGANIZATION_NAME, GMAIL_ACCOUNT, ACCOUNT_PASSWORD, TEACHER_NAME, URL } = process.env

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: GMAIL_ACCOUNT,
    pass: ACCOUNT_PASSWORD
  }
})

export const notifyByEmail = () => {
  try {
    transporter.sendMail({
      from: `${ORGANIZATION_NAME} < ${GMAIL_ACCOUNT}>`,
      to: GMAIL_ACCOUNT,
      subject: 'About the following class',
      text: `Hi,
      \nToday's class with ${TEACHER_NAME} is expected to be cancelled.
      \nThis is an automated message, it could be wrong, please check it on: \n${URL}`
    })
    console.log('Class canceled, email sent.')
  } catch (error) {
    console.log(error)
  }
}
