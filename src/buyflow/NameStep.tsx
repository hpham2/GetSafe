import React, { useCallback, useContext } from 'react'
import { BuyFlowContext } from '../context/BuyFlowContext'
import BaseStep from './component/BaseStep'
import { useHistory } from 'react-router-dom'

interface NameStepProps {
  path: string
}

const NameStep: React.FC<NameStepProps> = ({ path }) => {
  const { summaryData, setSummaryData } = useContext(BuyFlowContext)
  const history = useHistory()

  const handleClick = useCallback(
    (fullName: unknown) => {
      if (typeof fullName === 'string') {
        setSummaryData({ ...summaryData, fullName })
        history.push(`${path}/summary`)
      } else
        throw new Error(
          'This case should never be happened. Invalid value type!'
        )
    },
    [history, path, setSummaryData, summaryData]
  )

  return (
    <BaseStep stepName={'Fullname'} stepType={'text'} onClick={handleClick} />
  )
}

export default NameStep
