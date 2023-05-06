import React, { useCallback, useContext } from 'react'
import { BuyFlowContext } from '../context/BuyFlowContext'
import BaseStep from './component/BaseStep'
import { useHistory } from 'react-router-dom'

interface AgeStepProps {
  path: string
}

const AgeStep: React.FC<AgeStepProps> = ({ path }) => {
  const { summaryData, setSummaryData } = useContext(BuyFlowContext)
  const history = useHistory()

  const handleClick = useCallback(
    (age: unknown) => {
      if (typeof age === 'number') {
        setSummaryData({ ...summaryData, age })
        history.push(`${path}/fullname`)
      } else
        throw new Error(
          'This case should never be happened. Invalid value type!'
        )
    },
    [history, path, setSummaryData, summaryData]
  )

  return <BaseStep stepName={'Age'} stepType={'number'} onClick={handleClick} />
}

export default AgeStep
