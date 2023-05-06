import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BuyFlowContext } from '../context/BuyFlowContext'

interface NameStepProps {
  path: string
}

const NameStep: React.FC<NameStepProps> = ({ path }) => {
  const [fullName, setFullName] = useState('')
  const { summaryData, setSummaryData } = useContext(BuyFlowContext)

  return (
    <>
      <div>
        Fullname (Firstname, LastName):{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setFullName(value)
          }}
          value={fullName}
        ></input>
      </div>
      <button
        onClick={() => setSummaryData({ ...summaryData, fullName })}
        disabled={!fullName}
      >
        {fullName ? (
          <Link to={`${path}/summary`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </button>
    </>
  )
}

export default NameStep
