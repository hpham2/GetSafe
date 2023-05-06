import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface EmailStepProps {
  path: string
}

const EmailStep: React.FC<EmailStepProps> = ({ path }) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <button onClick={() => {}} disabled={!email}>
        <Link to={`${path}/age`}>Next</Link>
      </button>
    </>
  )
}

export default EmailStep
