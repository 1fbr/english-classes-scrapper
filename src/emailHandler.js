import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()
const { ORGANIZATION_NAME, GMAIL_ACCOUNT, ACCOUNT_PASSWORD, TEACHER_NAME } = process.env

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
      text: `The following class with ${TEACHER_NAME} is expected to be canceled. This is an automated message, could be wrong.`
    })
    console.log('Class canceled, email sent.')
  } catch (error) {
    console.log(error)
  }
}
