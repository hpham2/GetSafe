import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BuyFlowContext } from '../context/BuyFlowContext'

const SummaryStep = () => {
  const { summaryData } = useContext(BuyFlowContext)

  return (
    <>
      <div>Email: {summaryData.email}</div>
      <div>Age: {summaryData.age}</div>
      <div>FullName: {summaryData.fullName}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
