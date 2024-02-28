const sgMail = require('@sendgrid/mail');
const template = require('../helpers/themeMail/mailActive');

module.exports = async (name, email, link) => {
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey('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')
    const msg = {
        to: email, // Change to your recipient
        from: 'hoangvu@bacoor.co', // Change to your verified sender
        subject: 'TIKITECH Is Exactly What You Needed',
        text: 'And easy to do anywhere, easy to do anytime',
        html: template(name, email, link),
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}