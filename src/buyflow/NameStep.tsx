import React, { useState } from 'react'

interface NameStepProps {
  cb: (field: string, value: string) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
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
      <button
        onClick={() => props.cb('fullName', fullName)}
        disabled={!fullName}
      >
        Next
      </button>
    </>
  )
}

export default NameStep
