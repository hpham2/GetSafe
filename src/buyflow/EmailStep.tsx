import React, { useCallback, useContext } from 'react'
import { BuyFlowContext } from '../context/BuyFlowContext'
import BaseStep from './component/BaseStep'
import { useHistory } from 'react-router-dom'

interface EmailStepProps {
  path: string
}

const EmailStep: React.FC<EmailStepProps> = ({ path }) => {
  const { summaryData, setSummaryData } = useContext(BuyFlowContext)
  const history = useHistory()

  const handleClick = useCallback(
    (email: unknown) => {
      if (typeof email === 'string') {
        setSummaryData({ ...summaryData, email })
        history.push(`${path}/age`)
      } else
        throw new Error(
          'This case should never be happened. Invalid value type!'
        )
    },
    [history, path, setSummaryData, summaryData]
  )

  return (
    <BaseStep stepName={'Email'} stepType={'email'} onClick={handleClick} />
  )
}

export default EmailStep
