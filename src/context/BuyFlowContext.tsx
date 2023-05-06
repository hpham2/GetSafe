import React, { createContext, useState } from 'react'

export interface SummaryData {
  email: string
  age: number
  fullName: string
}

const initialSummaryData = {
  email: '',
  age: 0,
  fullName: '',
}

export const BuyFlowContext = createContext<{
  summaryData: SummaryData
  setSummaryData: (s: SummaryData) => void
}>({
  summaryData: initialSummaryData,
  setSummaryData: () => {},
})

export const BuyFlowStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [summaryData, setSummaryData] = useState<SummaryData>(
    initialSummaryData
  )

  return (
    <BuyFlowContext.Provider value={{ summaryData, setSummaryData }}>
      {children}
    </BuyFlowContext.Provider>
  )
}
