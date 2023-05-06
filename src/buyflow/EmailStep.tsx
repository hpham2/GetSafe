import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BuyFlowContext } from '../context/BuyFlowContext'

interface EmailStepProps {
  path: string
}

const EmailStep: React.FC<EmailStepProps> = ({ path }) => {
  const [email, setEmail] = useState('')
  const { summaryData, setSummaryData } = useContext(BuyFlowContext)

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
      <button
        onClick={() => setSummaryData({ ...summaryData, email })}
        disabled={!email}
      >
        <Link to={`${path}/age`}>Next</Link>
      </button>
    </>
  )
}

export default EmailStep
