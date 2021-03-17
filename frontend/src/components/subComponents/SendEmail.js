import React, { useState, useEffect } from "react"
import axios from "axios"

const SendEmail = () => {

  const [email, setEmail] = useState("")

  const send = async (email) => {

    try {
      await axios.post("/api/send", { email })
    } catch (error) {
      console.error(error)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    send(email)
    setEmail("")
  }
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <input
        type="email"
        placeholder="Enter your Email Addrress"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="btn btn-dark">Send</button>
    </form>
  )
}

export default SendEmail
