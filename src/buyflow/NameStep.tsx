import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface NameStepProps {
  path: string
}

const NameStep: React.FC<NameStepProps> = ({ path }) => {
  const [fullName, setFullName] = useState('')

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
      <button onClick={() => {}} disabled={!fullName}>
        <Link to={`${path}/summary`}>Next</Link>
      </button>
    </>
  )
}

export default NameStep
