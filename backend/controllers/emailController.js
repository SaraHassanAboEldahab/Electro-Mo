import sgMail from "@sendgrid/mail"

sgMail.setApiKey("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")

const sendSaleEmail = (email) => {
  sgMail.send({
    to: email,
    from: "electro.mo205@gmail.com",
    subject: "This is 1st email",
    text: `You Receive $20 Coupon and Free Shipping For Your First Shopping the :)`
  })
}
const sendEmail = async (req, res) => {
  const { email } = req.body
  try {
    sendSaleEmail(email)
    res.send(email)
  } catch (e) {
    res.status(404).send(e)
  }

}
export default sendEmail