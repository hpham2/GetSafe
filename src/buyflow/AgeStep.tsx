import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { BuyFlowContext } from '../context/BuyFlowContext'

interface AgeStepProps {
  path: string
}

const AgeStep: React.FC<AgeStepProps> = ({ path }) => {
  const [age, setAge] = useState(0)
  const { summaryData, setSummaryData } = useContext(BuyFlowContext)

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
      <button
        onClick={() => setSummaryData({ ...summaryData, age })}
        disabled={age <= 0}
      >
        {age > 0 ? (
          <Link to={`${path}/fullname`}>Next</Link>
        ) : (
          <span>Next</span>
        )}
      </button>
    </>
  )
}

export default AgeStep
