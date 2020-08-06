const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chendoy@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}, Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chendoy@gmail.com',
        subject: 'Sorry to see you go',
        text: `I'm sorry to have you leaving, ${name}, can you please tell we what was wrong?`
    })
}

module.exports = {sendWelcomeEmail, sendCancelationEmail}