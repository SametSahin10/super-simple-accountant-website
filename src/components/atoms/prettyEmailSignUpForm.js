import React, { useState, useEffect } from "react"

const PrettyEmailSignUpForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (status === "success") {
      setSuccess("Subscription successful! Thank you for signing up.")
      setEmail("")
    } else if (status === "error") {
      setError(message)
    }
  }, [status, message])

  const handleSubmit = e => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email) {
      setError("Email is required.")
      return
    }

    const formData = {
      EMAIL: email,
    }

    onValidated(formData)
  }

  return (
    <div style={{ marginTop: "8vh", marginBottom: "8vh" }}>
      <h2 style={{ fontWeight: "normal" }}>Let's keep in touch.</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
          <br />
          <br />
        </div>
        {error && <p style={errorStyle}>{error}</p>}
        {success && <p style={successStyle}>{success}</p>}
        <button type="submit" style={buttonStyle}>
          Subscribe
        </button>
      </form>
    </div>
  )
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "50px",
  border: "1px solid #ccc",
  borderRadius: "12px",
  maxWidth: "500px",
  margin: "0 auto",
}

const inputGroupStyle = {
  marginBottom: "4px",
  width: "100%",
}

const labelStyle = {
  display: "block",
  marginBottom: "10px",
}

const inputStyle = {
  width: "90%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #ccc",
}

const buttonStyle = {
  fontSize: "18px",
  padding: "12px 36px",
  paddingTop: "14px",
  borderRadius: "12px",
  border: "none",
  backgroundColor: "#673AB7",
  color: "#fff",
  cursor: "pointer",
}

const errorStyle = {
  color: "red",
  marginBottom: "15px",
}

const successStyle = {
  color: "green",
  marginBottom: "15px",
}

export default PrettyEmailSignUpForm
