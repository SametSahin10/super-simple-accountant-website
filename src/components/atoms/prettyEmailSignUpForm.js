import React, { useState, useEffect } from "react"

const PrettyEmailSignUpForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (status === "success") {
      setSuccess("Subscription successful! Thank you for signing up.")
      setEmail("")
      setName("")
    } else if (status === "error") {
      setError(message)
    }
  }, [status, message])

  const handleSubmit = e => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email || !name) {
      setError("Both fields are required.")
      return
    }

    const formData = {
      EMAIL: email,
      NAME: name,
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
          <div style={inputGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              Name (optional)
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              style={inputStyle}
            />
          </div>
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
  borderRadius: "5px",
  maxWidth: "500px",
  margin: "0 auto",
}

const inputGroupStyle = {
  marginBottom: "15px",
  width: "100%",
}

const labelStyle = {
  display: "block",
  marginBottom: "5px",
}

const inputStyle = {
  width: "90%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
}

const buttonStyle = {
  fontSize: "16px",
  padding: "10px 20px",
  borderRadius: "5px",
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
