import React, { useState } from 'react'

interface BaseStepProps {
  stepName: string
  stepType: 'email' | 'text' | 'number'
  onClick: (stepValue: string | number) => void
}

const BaseStep: React.FC<BaseStepProps> = ({ stepName, stepType, onClick }) => {
  const [stepValue, setStepValue] = useState(stepType === 'number' ? 0 : '')

  return (
    <>
      <div>
        {`${stepName}: `}
        <input
          type={stepType}
          onChange={({ target: { value } }) => {
            stepType === 'number'
              ? setStepValue(Number(value))
              : setStepValue(value)
          }}
          value={stepValue}
        ></input>
      </div>
      <button onClick={() => onClick(stepValue)} disabled={!stepValue}>
        Next
      </button>
    </>
  )
}

export default BaseStep
