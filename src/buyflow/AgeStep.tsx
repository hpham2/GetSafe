import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface AgeStepProps {
  path: string
}

const AgeStep: React.FC<AgeStepProps> = ({ path }) => {
  const [age, setAge] = useState(0)

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <button onClick={() => {}} disabled={age <= 0}>
        <Link to={`${path}/fullname`}>Next</Link>
      </button>
    </>
  )
}

export default AgeStep
